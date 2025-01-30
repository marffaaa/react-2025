import { joiResolver } from "@hookform/resolvers/joi";
import { searchValidator } from "../../validators/search.validator";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface IFormProps {
    search: string;
}

interface SearchComponentProps {
    onSearch: (searchQuery: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
    const { handleSubmit, register, formState: { isValid } } = useForm<IFormProps>({
        mode: "all",
        resolver: joiResolver(searchValidator),
    });

    const navigate = useNavigate();

    const customHandler = (formDataProps: IFormProps) => {
        // Викликаємо onSearch при відправці форми
        onSearch(formDataProps.search);
        navigate(`/search-results?query=${formDataProps.search}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type="text" {...register("search")} />
                </label>
                <button disabled={!isValid}>Search</button>
            </form>
        </div>
    );
};

export default SearchComponent;

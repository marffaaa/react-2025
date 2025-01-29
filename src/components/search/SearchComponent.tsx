import { joiResolver } from "@hookform/resolvers/joi";
import { searchValidator } from "../../validators/search.validator";
import { useForm } from "react-hook-form";

interface IFormProps{
    search: string
}

const SearchComponent = () => {
    const {
        handleSubmit,
        register,
        formState:{isValid}}
        = useForm<IFormProps>({
        mode: "all",
        resolver: joiResolver(searchValidator)
    });
    const customHandler = (formDataProps: IFormProps) =>{
        console.log(formDataProps)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type="text" {...register('search')}/>
                </label>
                <button disabled={!isValid}>search</button>
            </form>
        </div>
    )
        ;
};

export default SearchComponent;

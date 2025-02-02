import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RecipesComponent from "../components/recipes/RecipesComponent";
import SearchComponent from "../components/search/SearchComponent";

const RecipesPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            navigate("/");
        }
    }, [navigate]);

    return (
        <div>
            <SearchComponent />
            <RecipesComponent />
        </div>
    );
};

export default RecipesPage;

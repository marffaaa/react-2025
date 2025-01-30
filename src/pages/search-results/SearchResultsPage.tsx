import { useState} from "react";
import { useSearchResults } from "./useSearchResults";
import SearchComponent from "../../components/search/SearchComponent";
import UsersSearchResponseComponent from "../../components/users/UsersSeachResponseComponent";
import RecipesSearchResponseComponent from "../../components/recipes/RecipesSeachResponseComponent";

const SearchResultsPage = () => {
    const [query, setQuery] = useState<string>("");

    const { users, recipes, loading } = useSearchResults(query);

    const handleSearch = (searchQuery: string) => {
        setQuery(searchQuery);
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Search Results</h1>
            <SearchComponent onSearch={handleSearch} />
            <div>
                <h2>Users</h2>
                {users && users.users.length > 0 ? (
                    users.users.map((user) => (
                        <UsersSearchResponseComponent user={user} key={user.id} />
                    ))
                ) : (
                    <p>No users found.</p>
                )}
            </div>

            <div>
                <h2>Recipes</h2>
                {recipes && recipes.recipes.length > 0 ? (
                    recipes.recipes.map((recipe) => (
                        <RecipesSearchResponseComponent recipe={recipe} key={recipe.id} />
                    ))
                ) : (
                    <p>No recipes found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResultsPage;

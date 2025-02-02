import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const capitalizeFirstLetter = (str: string): string => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const SearchComponent = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const searchType = location.pathname.includes("/users") ? "users" : "recipes";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;
        const formattedQuery = capitalizeFirstLetter(query);
        navigate(`/search/${searchType}/${formattedQuery}`);
        setQuery("");
    };

    return (
        <div className="flex justify-center border-t-2 border-red-950 w-full bg-red-50 m-0 p-5">
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
                <input
                    className="w-72 h-9 shadow-md px-6 rounded-3xl"
                    type="text"
                    placeholder={`Search ${searchType}...`}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className='px-3' type="submit" disabled={!query}><img className='w-6' src="https://img.icons8.com/?size=100&id=LnB6MFtcppUH&format=png&color=000000" alt="search-icon"/></button>
            </form>
        </div>
    );
};

export default SearchComponent;

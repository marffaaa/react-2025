import { ITodo } from "../models/ITodo";

export const getTodos = async (): Promise<ITodo[]> => {
    return await fetch(import.meta.env.VITE_API_URL)
        .then((response) => response.json())
        .then((data) => data.todos);
};

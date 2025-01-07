import { useEffect, useState } from "react";
import { ITodo } from "../models/ITodo";
import { getTodos } from "../services/api.service";
import TodoComponent from "./TodoComponent";

const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const todos = await getTodos();
            setTodos(todos);
        };

        fetchTodos();

        return () => {
            console.log("finish");
        };
    }, []);

    return (
        <div className="flex justify-center">
            <div className="columns-2 flex-row">
                {todos.map((todo) => (
                    <TodoComponent key={todo.id} todo={todo} />
                ))}
            </div>
        </div>
    );
};

export default TodosComponent;

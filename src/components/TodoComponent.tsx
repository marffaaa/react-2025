import { FC } from "react";
import { ITodo } from "../models/ITodo";

type MyPropsType = {
    todo: ITodo
}

const TodoComponent: FC<MyPropsType> = ({todo}) => {
    return (
        <div className=" flex-col w-72 p-6 mx-9 h-60 bg-neutral-300 mb-8 content-center text-neutral-900 rounded-2xl">
             <h2 className="text-xl font-bold p-2.5">{todo.id}. {todo.title}</h2>
            <p className="ml-3"><b>User Id:</b>  {todo.userId}</p>
            <p className="ml-3"><b>Completed:</b> {String(todo.completed)}</p>
        </div>
    );
};

export default TodoComponent;
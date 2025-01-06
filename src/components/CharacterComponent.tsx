import { FC, ReactNode } from "react";
import { ISimpson } from "../models/ISimpson";

type MyPropsType = {
    simpson: ISimpson;
    children: ReactNode;
}
const CharacterComponent: FC<MyPropsType> = ({simpson, children}) => {
    return (
        <div className= "w-96 flex-col bg-indigo-200 rounded-xl shadow-md mt-6 ">
            <div className= "flex justify-center"><img className="h-80 p-4" src={simpson.photo} alt={simpson.name}/></div>
            <h2 className="font-bold p-4 text-3xl" >{simpson.name} {simpson.surname}</h2>
            <p> <b>Age:</b> {simpson.age}</p>
            <div className="flex justify-center"><p className="w-9/12 p-5">{children}</p></div>

        </div>
    );
};

export default CharacterComponent;
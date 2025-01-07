import {useEffect, useState } from "react";
import { IUser } from "../models/IUser";
import UserComponent from "./UserComponent";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(response =>{
                setUsers(response);
            });

        return ()=>{
            console.log('done')
        }
    }, []);  // якщо масив пустий то  useEffect() виконується лише раз
    return (
        <div>
            {users.map(user => <UserComponent key={user.id} item={user}/>)}
        </div>
    );
};

export default UsersComponent;
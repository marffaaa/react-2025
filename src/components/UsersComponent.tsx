import {useEffect, useState } from "react";
import { IUser } from "../models/IUser";
import UserComponent from "./UserComponent";
import { getUsers } from "../services/api.service";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers()
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
import {useEffect, useState } from "react";
import { IUser } from "../../models/IUser";
import UserComponent from "../user/UserComponent";
import { userService } from "../../services/api.service";


const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        userService.getUsers().then((allUsers)=>{
            setUsers(allUsers);
        })
    }, []);
    return (
        <div>
            {users.map(user=> <UserComponent key={user.id} item={user}/>)}
        </div>
    );
};

export default UsersComponent;
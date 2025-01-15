import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {userService } from "../../services/api.service";
import UserComponent from "../user/UserComponent";
import { IUser } from "../../models/user/IUser";


const UsersComponent = () => {
    const[query] = useSearchParams()
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        userService.getAllUsers((query.get('skip')) || '0').then(value => setUsers(value.users))
    }, [query]);
    return (
        <div>
            {
                users.map((user) => <UserComponent item={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersComponent;
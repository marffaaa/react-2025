import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {getAllUsers } from "../../services/api.services";
import { IUser } from "../../models/IUser";
import UserComponent from "../user/UserComponent";


const UsersComponent = () => {
    const[query] = useSearchParams()
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getAllUsers((query.get('pg')) || '1').then(value => setUsers(value.users))
    }, [query]);
    return (
        <div>
            {
                users.map((user) => <UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersComponent;
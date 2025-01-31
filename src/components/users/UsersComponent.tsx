import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import UserComponent from "../user/UserComponent";
import PaginationComponent from "../pagination/PaginationComponent";
import { getAllUsers } from "../../services/api.services";
import { IUser } from "../../models/IUser";

const UsersComponent = () => {
    const [query] = useSearchParams();
    const [users, setUsers] = useState<IUser[]>([]);
    const [total, setTotal] = useState<number>(0);
    const limit = 30;
    const skip = Number(query.get('skip')) || 0;

    useEffect(() => {
        getAllUsers(skip.toString()).then((value) => {
            setUsers(value.users);
            setTotal(value.total);
        });
    }, [query]);

    return (
        <div className='w-full h-full bg-red-50 m-0'>
            {users.map((user) => (<UserComponent key={user.id} user={user} />))}

            <PaginationComponent total={total} limit={limit} />
        </div>
    );
};

export default UsersComponent;

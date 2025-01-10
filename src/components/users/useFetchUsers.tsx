import { useEffect, useState } from "react";

import { IUser } from "../../models/IUser";
import { userService } from "../../services/api.services";

export const useFetchUsers = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            setUsers(await userService.getUsers());
        };
        fetchUsers();
    }, []);
    return { users };
};
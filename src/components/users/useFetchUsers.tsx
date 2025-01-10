import { useEffect, useState } from "react";

import { IUser } from "../../models/IUser";
import { userService } from "../../services/api.services";

export const useFetchUsers = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const allUsers = await userService.getUsers();
            setUsers(allUsers);
        };
        fetchUsers();
    }, []);
    return { users };
};
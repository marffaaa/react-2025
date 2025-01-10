import { useEffect, useState } from "react";
import { IUser } from "../../models/user/IUser";
import { userService } from "../../services/api.service";

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

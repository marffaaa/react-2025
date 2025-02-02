import { useState, useEffect } from "react";
import { getUserById } from "../../services/user.api.services";
import { IUser } from "../../models/IUser";


export const useUserDetail = (userId: string | undefined) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (userId) {
            const id = parseInt(userId);
            if (!isNaN(id)) {
                getUserById(id)
                    .then((userData) => {
                        setUser(userData);
                        setError(null);
                    })
                    .catch(() => {
                        setError("User not found");
                    });
            } else {
                setError("Invalid user ID");
            }
        }
    }, [userId]);

    return { user, error };
};

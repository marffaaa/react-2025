import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserDetailsComponent from "../components/user/UserDetailsComponent";
import { IUser } from "../models/IUser";
import { getUserById } from "../services/api.services";

const UserDetailsPage = () => {
    const { userId } = useParams();
    const [user, setUser] = useState<IUser | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (userId) {
            // Перетворюємо userId на number
            const id = parseInt(userId);
            console.log('userId from params:', userId); // Логування отриманого userId
            console.log('Parsed ID:', id);

            if (!isNaN(id)) {
                getUserById(parseInt(userId))
                    .then((user) => {
                        console.log('User data:', user); // Логування отриманих даних
                        setUser(user);
                        setError(null); // Очищення помилки, якщо все вдалося
                    })
                    .catch((error) => {
                        console.error('Error fetching user:', error); // Логування помилки
                        setError("User not found");
                    });
            } else {
                setError("Invalid user ID");
            }
        }
    }, [userId]);

    return (
        <div>
            {error ? <p>{error}</p> : (user ? <UserDetailsComponent user={user} /> : <p>Loading...</p>)}
        </div>
    );
};

export default UserDetailsPage;

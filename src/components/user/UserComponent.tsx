
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../models/IUser";

type PropsType = {
    user: IUser;
};

const UserComponent: FC<PropsType> = ({ user }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/auth/users/${user.id}`);
    };

    return (
        <div>
            <div onClick={handleClick} style={{ cursor: "pointer", marginBottom: "5px" }}>
                <h3>{user.id}. {user.firstName} {user.lastName}</h3>
            </div>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    );
};

export default UserComponent;

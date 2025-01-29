import { FC } from "react";
import { IUser } from "../../models/IUser";

type PropsType ={
    user: IUser
}
const UserComponent:FC<PropsType> = ({user}) => {
    return (
        <div>
            <h2>{user.id}. {user.firstName } {user.lastName}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>

        </div>
    );
};

export default UserComponent;
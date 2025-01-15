import { FC } from "react";
import { IUser } from "../../models/IUser";

type PropsType ={
    user: IUser
}
const UserComponent:FC<PropsType> = ({user}) => {
    return (
        <div>
            <h2>{user.id}. {user.first_name } {user.first_name}</h2>
            <p>{user.email}</p>
            <img src={user.avatar} alt={user.last_name}/>
        </div>
    );
};

export default UserComponent;
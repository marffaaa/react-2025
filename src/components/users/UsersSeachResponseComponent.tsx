import { FC } from "react";
import UserComponent from "../user/UserComponent";
import { IUser } from "../../models/IUser";


interface UserComponentProps {
    user: IUser;
}

const UsersSearchResponseComponent:FC<UserComponentProps> = ({user}) => {
    return (
        <div>
            {<UserComponent user={user} key={user.id}/>}
        </div>
    );
};

export default UsersSearchResponseComponent;

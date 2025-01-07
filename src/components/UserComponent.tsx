import { FC } from "react";
import { IUser } from "../models/IUser";

type UserPropType={
    item: IUser;
}

const UserComponent: FC<UserPropType> = ({item}) => {
    return (
        <div>
            <h2>{item.id}. {item.name}</h2>
        </div>
    );
};

export default UserComponent;
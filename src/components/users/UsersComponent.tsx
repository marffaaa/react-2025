import { urls } from "../../constants/urls";
import { useFetchData } from "../../hooks/useFetchData";
import { IUser } from "../../models/IUser";
import UserComponent from "../user/UserComponent";

const UsersComponent = () => {
    const users = useFetchData<IUser[]>(urls.users.allUsers);

    return (
        <div>
            {users && users.map((user) => (<UserComponent key={user.id} item={user}/>))}
        </div>
    );
};

export default UsersComponent;
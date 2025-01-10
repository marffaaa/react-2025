import UserComponent from "../user/UserComponent";
import { useFetchUsers } from "./useFetchUsers";

const UsersComponent = () => {
    const { users } = useFetchUsers();

    return (
        <div>
            {users.map((user) => (<UserComponent key={user.id} item={user}/>))}
        </div>
    );
};

export default UsersComponent;
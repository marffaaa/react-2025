import { useSearchParams } from "react-router-dom";
import UserComponent from "../user/UserComponent";
import PaginationComponent from "../pagination/PaginationComponent";
import { useAppSelector } from "../../redux/hooks/useAppSelector";

const UsersComponent = () => {
    const [query] = useSearchParams();
    const { users, total } = useAppSelector(state => state.userSlice);
    const limit = 30;
    const skip = Number(query.get("skip")) || 0;
    console.log(skip)

    return (
        <div className="w-full h-full bg-red-50 m-0">
            {users.map(user => (
                <UserComponent key={user.id} user={user} />
            ))}

            <PaginationComponent total={total} limit={limit} />
        </div>
    );
};

export default UsersComponent;

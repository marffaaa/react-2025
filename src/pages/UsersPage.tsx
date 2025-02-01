import UsersComponent from "../components/users/UsersComponent";
import SearchComponent from "../components/search/SearchComponent";
// import { useAppSelector } from "../main";

const UsersPage = () => {
    // const userSlice = useAppSelector(state => state.userSlice)
    return (
        <div>
            <SearchComponent />
            <UsersComponent />
        </div>
    );
};

export default UsersPage;

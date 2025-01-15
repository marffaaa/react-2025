import { Outlet } from "react-router-dom";
import UsersComponent from "../components/users/UsersComponent";


const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;
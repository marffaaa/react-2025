import { Outlet } from "react-router-dom";
import UsersComponent from "../components/users/UsersComponents";


const UsersPage = () => {
    return (
        <div >
            <Outlet/>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;
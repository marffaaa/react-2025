import { Outlet } from "react-router-dom";
import PaginationComponent from "../components/pagination/PaginationComponent";


const Layout = () => {
    return (
        <div>
            <Outlet/>
            <PaginationComponent/>
        </div>
    );
};

export default Layout;
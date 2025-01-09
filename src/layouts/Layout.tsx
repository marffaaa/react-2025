import { Outlet } from "react-router-dom";
import Menu from "../components/menu/Menu";

const Layout = () => {
    return (
        <div>
            <Menu/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Layout;
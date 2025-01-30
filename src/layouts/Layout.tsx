import {Outlet} from "react-router-dom";
import MenuComponent from "../components/menu/MenuComponent";


const Layout = () => {
    return (
        <div>
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};

export default Layout;

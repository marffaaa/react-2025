import { Outlet } from "react-router";
import MenuComponent from "../components/menu/MenuComponent";


const MainLayout = () => {
    return (
        <div>
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
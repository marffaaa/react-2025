import { Link } from "react-router-dom";


const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/auth'}>Authorization</Link></li>
                <li><Link to={'/auth/users'}>Users</Link></li>
                <li><Link to={'/auth/recepes'}>Recepes</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;

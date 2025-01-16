import { Link } from "react-router";


const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/cars'}>Available cars</Link></li>
                <li><Link to={'/cars/create'}>Create new car</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;
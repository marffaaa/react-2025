import { Link } from "react-router";


const MenuComponent = () => {
    return (
        <div className="flex justify-center">
            <ul className="flex flex-row gap-x-20 mt-6 text-lg font-medium">
                <li><Link to={'/cars'}>Available cars</Link></li>
                <li><Link to={'/cars/create'}>Create new car</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;
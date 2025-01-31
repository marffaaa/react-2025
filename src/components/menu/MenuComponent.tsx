import { Link } from "react-router-dom";


const MenuComponent = () => {
    return (
        <div>
            <ul className="flex flex row gap-20 justify-center items-center h-16 text-lg text-red-950 font-bold">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/auth'}>Authorization</Link></li>
                <li><Link to={'/auth/users'}>Users</Link></li>
                <li><Link to={'/auth/recipes'}>Recipes</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;

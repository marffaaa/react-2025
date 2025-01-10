import { Link } from 'react-router-dom';
import './menu.css'
const Menu = () => {
    return (
        <div>
            <ul className="flex flex-row gap-20 justify-center my-7">
                <li className="scale-125"><Link to={''}>home</Link></li>
                <li className="scale-125"><Link to={'users'}>users</Link></li>
                <li className="scale-125"><Link to={'posts'}>posts</Link></li>
            </ul>
        </div>
    );
};

export default Menu;
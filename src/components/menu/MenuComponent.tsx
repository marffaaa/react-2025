import { Link } from "react-router-dom";

const MyComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'/login'}>link</Link></li>
                <li><Link to={'/auth/resources'}>resources</Link></li>
            </ul>
        </div>
    );
};

export default MyComponent;

import { useLocation } from "react-router-dom";
import { IUser } from "../models/IUser";


const SingleUserDetailsPage = () => {
    const {state} = useLocation()// для перенесенні інформації через <Link to={}></Link>
    const user = state as IUser// шоб були підказки при створені розмітки

    return (
        <div>
            {user.email}
        </div>
    );
};

export default SingleUserDetailsPage;
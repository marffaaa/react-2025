import { useParams } from "react-router-dom";
import UserDetailsComponent from "../../components/user/UserDetailsComponent";
import { useUserDetail } from "./useUserDetail";


const UserDetailsPage = () => {
    const { userId } = useParams();
    const { user, error } = useUserDetail(userId);
    return (
        <div>
            {error ? <p>{error}</p> : (user ? <UserDetailsComponent user={user} /> : <p>Loading...</p>)}
        </div>
    );
};

export default UserDetailsPage;

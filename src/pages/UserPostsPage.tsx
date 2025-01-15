import {useParams} from "react-router-dom";
import PostsComponent from "../components/posts/PostsComponent";


const UserPostsPage = () => {
    const {userId} = useParams()

    return (
        <div>
            {userId && <PostsComponent userId={userId} key={userId}/>}
        </div>
    );
};

export default UserPostsPage;
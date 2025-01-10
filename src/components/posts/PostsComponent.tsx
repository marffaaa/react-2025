import PostComponent from "../post/PostComponent";
import { useFetchPosts } from "./useFetchPosts";

const PostsComponent = () => {

    const {posts} = useFetchPosts()

    return (
        <div>
            {posts.map(post=> <PostComponent key={post.id} item={post}/>)}
        </div>
    );
};

export default PostsComponent;
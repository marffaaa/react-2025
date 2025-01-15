import { FC, useEffect, useState } from "react";
import { IPost } from "../../models/IPost";
import { postService } from "../../services/api.service";
import PostComponent from "../post/PostComponent";

type  PostsTypeProps = {
userId: string
}
const PostsComponent:FC<PostsTypeProps> = ({userId}) => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        if (userId){
            postService
                .getAllPostsOfUserById(+userId)
                .then(value => setPosts(value))
        }
    }, [userId]);
    return (
        <div>
            {
                posts.map(value => <PostComponent key={value.id} post={value}/>)
            }
        </div>
    );
};

export default PostsComponent;
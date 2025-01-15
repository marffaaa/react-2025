import { FC } from "react";
import { IPost } from "../../models/IPost";

type PostPropType ={
    post: IPost;
}

const PostComponent:FC<PostPropType> = ({post}) => {
    return (
        <div>
            <h2>{post.id}. {post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostComponent;
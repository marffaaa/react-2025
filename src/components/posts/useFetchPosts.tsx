import { useEffect, useState } from "react";
import { postService } from "../../services/api.service";
import { IPost } from "../../models/post/IPost";

export const useFetchPosts = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        postService.getPosts().then((allPosts)=>{
            setPosts(allPosts);
        })
    }, []);
    return {posts}
};


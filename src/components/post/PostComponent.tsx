import { FC } from "react";
import { IPost } from "../../models/post/IPost";
import { formatTags } from "./formatTags";


type PostTypeProps={
    item: IPost
}

const PostComponent: FC<PostTypeProps> = ({item}) => {
    return (
        <div className="flex justify-center w-screen my-8">
            <div className="flex flex-col w-3/5 h-72 bg-slate-300 rounded-xl gap-y-2.5 justify-center">
                <h2 className="mx-20 font-bold text-lg ">{item.id}. {item.title}</h2>
                <p className="w-4/5 mx-20">{item.body}</p>
                <p className="mx-20">{formatTags(item.tags)}</p>
                <div className="flex flex-row gap-3 mx-20 font-semibold">
                    <p>{item.views} views</p>
                    <p>{item.reactions.likes} &#x1F44D;</p>
                    <p>{item.reactions.dislikes} &#128078;</p>
                </div>
            </div>
        </div>

    );
};

export default PostComponent;
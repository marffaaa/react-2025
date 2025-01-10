import { urls } from "../constants/urls"
import { IPost } from "../models/post/IPost"
import { IUser } from "../models/user/IUser"


const userService = {
    getUsers: async (): Promise<IUser[]> =>{
        return await fetch(urls.users.allUsers)
            .then(value => value.json())
            .then((data) => data.users);
    },
    getUser: async (id:number): Promise<IUser> =>{
        return await fetch(urls.users.byID(id))
            .then(value => value.json())
    }
}

const postService = {
    getPosts: async (): Promise<IPost[]> =>{
        return await fetch(urls.posts.allPosts)
            .then(value => value.json())
            .then((data) => data.posts);
    }
}

export {
    userService, postService
}
import { urls } from "../constants/urls"
import { IPost } from "../models/IPost"
import { IUser } from "../models/IUser"

export const userService = {
    getUsers: async (): Promise<IUser[]> =>{
        return await fetch(urls.users.allUsers)
            .then(value => value.json())
    },
    getUser: async (id:number): Promise<IUser> =>{
        return await fetch(urls.users.byID(id))
            .then(value => value.json())
    }

}

export const postService = {
    getAllPostsOfUserById: async (id:number):Promise<IPost[]> =>{
        return await fetch(urls.posts.userPostsByID(id))
            .then(value => value.json())
    }
}
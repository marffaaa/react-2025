import { urls } from "../constants/urls"
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
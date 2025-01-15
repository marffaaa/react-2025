import { urls } from "../constants/urls"
import { IUsersResponse } from "../models/response/IUsersResponse";

const userService = {
    getAllUsers: async (skip:string): Promise<IUsersResponse> =>{
        return await fetch(urls.users.allUsers + '?skip=' + skip)
            .then(value => value.json())
    },
}

export {
    userService
}
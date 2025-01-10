import { urls } from "../constants/urls";
import { ICart } from "../models/ICart";
import { ICartResponse } from "../models/ICartResponse";
import { IUser } from "../models/IUser";

const userService = {
    getUsers: async (): Promise<IUser[]> =>{
        return await fetch(urls.users.allUsers)
            .then(value => value.json())
            .then((data) => data.users);
    },
    getUser: async (id:number): Promise<IUser> =>{
        return await fetch(urls.users.byID(id))
            .then(value => value.json())
    },

}

const cartService = {
    getUserCarts: async (id:string): Promise<ICart[]> =>{
        return await fetch(urls.carts.cartsById(id))
            .then(value => value.json())
            .then(({ carts }: ICartResponse)=> carts)
    }
}
export {
    userService, cartService
}
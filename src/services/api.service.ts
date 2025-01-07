import { IUser } from "../models/IUser";

const getUsers = async ():Promise<IUser[]> =>{
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    return users;
}

export {
    getUsers
}
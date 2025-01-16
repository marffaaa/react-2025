import axios from "axios";
import { IUser } from "../models/IUser";

const axiosInstanse = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers:{'Content-Type': 'application/json'},
})

export const getAllUsers = async ():Promise<IUser[]> =>{
    const {data} = await axiosInstanse.get<IUser[]>('/users')
    return data
}

axiosInstanse.interceptors.request.use((request) => {

    request.headers.set("xxx", "xxxx")
    console.log(request.method)
    console.log(request)

    return request;
})

axiosInstanse.interceptors.response.use((response) => {
    return response;
})

export const saveUser = async (user: IUser): Promise<IUser> =>{
    const {data} = await axiosInstanse.post<IUser>('/users', user)
    return data
}
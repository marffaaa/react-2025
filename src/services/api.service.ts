import axios from "axios";
import { IUserWithTokens } from "../models/IUserWithTokens";
import { IProduct } from "../models/IProduct";
import { IBaseResponseModel } from "../models/IBaseResponseModel";
import { retriveLocalStorage } from "./helpers";
import { ITokenPair } from "../models/ITokenPair";

const axiosInstance = axios.create({
    baseURL :'https://dummyjson.com/auth',
    headers:{}
})

type LoginData = {
    username: string,
    password: string,
    expiresInMins: number
}


axiosInstance.interceptors.request.use((requestObject) =>{
    if (requestObject.method?.toUpperCase() === 'GET'){
        requestObject.headers.Authorization = 'Bearer' + retriveLocalStorage<IUserWithTokens>('users').accessToken
    };
    return requestObject;
})

export const login = async ({username, password,expiresInMins}:LoginData):Promise<IUserWithTokens> =>{
   const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
   console.log(userWithTokens);
   localStorage.setItem('user', JSON.stringify(userWithTokens))
    return userWithTokens
}

export const loadAuthProducts = async ():Promise<IProduct[]> => {
  const {data:{products}} = await axiosInstance.get<IBaseResponseModel>('/products');
  return products
}


export const refresh = async () => {

    const iUserWithToken = retriveLocalStorage<IUserWithTokens>('user');
    const {data:{ accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
          refreshToken: iUserWithToken.refreshToken,
          expiresInMins: 1
    })
    iUserWithToken.accessToken = accessToken;
    iUserWithToken.refreshToken = refreshToken;
    localStorage.setItem( 'user', JSON.stringify(iUserWithToken))
}
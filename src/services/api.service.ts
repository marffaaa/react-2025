import axios from "axios";
import { ICar } from "../models/ICar";

const axiosInstance = axios.create({
    baseURL :'http://185.69.152.209/carsAPI/v1'
})

const getAllCars = async ():Promise<ICar[]> =>{
    const {data} = await axiosInstance.get<ICar[]>('/cars')
    return data
}

const addNewCar = async (car:ICar)=>{
    await axiosInstance.post<ICar>('/cars', car)
}

export {
    getAllCars,
    addNewCar
}
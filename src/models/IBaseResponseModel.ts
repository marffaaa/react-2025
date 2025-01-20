import { IProduct } from "./IProduct";


export interface IBaseResponseModel {
  products: IProduct[];
  users?: any[];
  carts?: any[];
  total: number;
  skip: number;
  limit: number;
}
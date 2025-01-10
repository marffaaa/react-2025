import { ICart } from "./ICart";

export interface ICartResponse{
    total: number;
    skip: number;
    limit: number;
    carts: ICart[];
}
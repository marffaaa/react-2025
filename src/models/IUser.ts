import { Address } from "./IAddress";
import { Company } from "./ICompany";

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}



import { IUser } from "../user/IUser";

export interface IUsersResponse {
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
}
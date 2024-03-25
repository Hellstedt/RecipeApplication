import { IUser } from "./Iuser";

export interface ILoginResponse {
    message: string;
    token: string;
    user: IUser;
}

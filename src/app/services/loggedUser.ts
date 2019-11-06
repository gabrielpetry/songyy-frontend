import { User } from "../models/user";

export interface LoggedUser {
  user: User;
  token: string;
}

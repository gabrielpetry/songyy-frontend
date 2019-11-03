import { User } from "./user";

export interface LoggedUser {
  user: User;
  token: string;
}

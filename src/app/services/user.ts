import { Guild } from "./guild";

export interface User {
  _id: string;
  username: string;
  guilds: Guild[];
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

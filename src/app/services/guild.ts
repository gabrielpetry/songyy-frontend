import { Playlist } from "./playlist";

export interface Guild {
  _id: string;
  playlists: Playlist[];
  guild_id: string;
  guild_name: string;
  playlist: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

import { Song } from "./song";

export interface Playlist {
  _id: string;
  active: boolean;
  songs: Song[];
  name: string;
  guild: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

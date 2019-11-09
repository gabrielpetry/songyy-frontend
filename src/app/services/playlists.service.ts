import { Injectable } from "@angular/core";
import { Playlist } from "../models/playlist";
import { Observable } from "rxjs";
import { Service } from "./service";
import { HttpClient } from "@angular/common/http";
import { Song } from "../models/song";

@Injectable({
  providedIn: "root"
})
export class PlaylistsService extends Service {
  songs: any;

  get(): any {
    return this.sendGetRequest<Playlist[]>("playlists");
  }
  getPlaylistSongs(playlistName: string): Observable<Playlist> {
    return this.sendGetRequest<Playlist>(`playlists/${playlistName}`);
  }

  saveNewPlaylist({ name, comment, guild_id }) {
    return this.sendPostRequest<Playlist[]>("playlists", {
      name,
      comment,
      guild_id
    });
  }

  clonePlaylist({ origin, target }) {
    console.log(origin, target);
    return this.sendPostRequest<Playlist>(`playlists/${origin}/clone`, {
      guildId: target
    });
  }
}

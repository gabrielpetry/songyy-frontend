import { Injectable } from "@angular/core";
import { Playlist } from "../models/playlist";
import { Observable } from "rxjs";
import { Service } from "./service";
import { HttpClient } from "@angular/common/http";
import { Song } from "../models/song";

@Injectable({
  providedIn: "root"
})
export class SongsService extends Service {
  save({ youtube_link, comment, playlist_id, order }): Observable<Playlist[]> {
    return this.sendPostRequest<Playlist[]>("songs", {
      youtube_link,
      comment,
      playlist_id,
      order
    });
  }

  toggleSongStatus(_id: string, status: number) {
    return this.sendPutRequest<Song[]>("songs", {
      _id,
      active: !status
    });
  }

  updateSongOrder(_id: string, order: number) {
    return this.sendPutRequest<Song>("songs", {
      _id,
      order
    });
  }

  deleteSong(_id) {
    return this.sendDeleteRequest<Song>("songs", _id);
  }
}

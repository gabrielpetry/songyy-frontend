import { Injectable } from "@angular/core";
import { Playlist } from "./playlist";
import { Observable } from "rxjs";
import { Service } from "./service";
import { HttpClient } from "@angular/common/http";
import { Song } from "./song";

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

  toggleSongStatus(_id, status) {
    return this.sendPutRequest<Song[]>("songs", {
      _id,
      active: !status
    });
  }

  deleteSong(_id) {
    return this.sendDeleteRequest<Song[]>("songs", _id);
  }
}

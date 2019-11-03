import { Injectable } from "@angular/core";
import { Playlist } from "./playlist";
import { Observable } from "rxjs";
import { Service } from "./service";
import { HttpClient } from "@angular/common/http";
import { Guild } from "./guild";

@Injectable({
  providedIn: "root"
})
export class GuildService extends Service {
  songs: any;

  get(): any {
    return this.sendGetRequest<Guild[]>("guilds");
  }
}

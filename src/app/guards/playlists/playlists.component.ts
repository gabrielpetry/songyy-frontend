import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PlaylistsService } from "../../services/playlists.service";
import { Playlist } from "../../models/playlist";
import { Guild } from "../../models/guild";
import { GuildService } from "../../services/guild.service";

@Component({
  selector: "app-playlists",
  templateUrl: "./playlists.component.html",
  styleUrls: ["./playlists.component.styl"]
})
export class PlaylistsComponent implements OnInit {
  playlists: Playlist[];
  guilds: Guild[];
  formInfo: any = {};

  constructor(
    private playlistService: PlaylistsService,
    private guildService: GuildService
  ) {}

  ngOnInit() {
    // this.playlists = this.playlistService.get();
    // console.log('playlists', this.playlists)
    this.updatePlaylists();
    this.getGuilds();
  }

  updatePlaylists() {
    this.playlistService.get().subscribe(data => {
      console.log(data);
      this.playlists = data.playlists;
    });
  }

  getGuilds() {
    this.guildService.get().subscribe(data => {
      this.guilds = data.guilds;
    });
  }

  saveNewPlaylist() {
    const { comment, name, guildId } = this.formInfo;
    this.playlistService
      .saveNewPlaylist({ comment, name, guild_id: guildId })
      .subscribe(data => this.updatePlaylists());
  }
}

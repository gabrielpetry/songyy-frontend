import { Component, OnInit, TemplateRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PlaylistsService } from "../../services/playlists.service";
import { Playlist } from "../../models/playlist";
import { Guild } from "../../models/guild";
import { GuildService } from "../../services/guild.service";

import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-playlists",
  templateUrl: "./playlists.component.html",
  styleUrls: ["./playlists.component.styl"]
})
export class PlaylistsComponent implements OnInit {
  playlists: Playlist[];
  guilds: Guild[];
  filteredGuilds: Guild[];
  formInfo: any = {};
  modalRef: BsModalRef;

  constructor(
    private playlistService: PlaylistsService,
    private guildService: GuildService,
    private modalService: BsModalService
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
      .subscribe(data => {
        this.updatePlaylists();
        this.modalService.hide(1);
      });
  }

  openModal(
    template: TemplateRef<any>,
    guild_id: string = "",
    oldPlaylistId: string = ""
  ) {
    this.formInfo.oldPlaylistId = oldPlaylistId;
    this.filteredGuilds = this.guilds.filter(guild => guild._id != guild_id);
    this.modalRef = this.modalService.show(template);
  }

  clonePlaylist() {
    this.playlistService
      .clonePlaylist({
        target: this.formInfo.cloneNewGuildId,
        origin: this.formInfo.oldPlaylistId
      })
      .subscribe(data => {
        console.log(data);
        this.updatePlaylists();
        this.modalService.hide(1);
      });
  }
}

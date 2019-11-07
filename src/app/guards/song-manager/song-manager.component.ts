import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PlaylistsService } from "../../services/playlists.service";
import { SongsService } from "../../services/songs.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-song-manager",
  templateUrl: "./song-manager.component.html",
  styleUrls: ["./song-manager.component.styl"]
})
export class SongManagerComponent implements OnInit {
  songs: any;
  selectedVideo: any = "";
  // playlistName: string;
  formInfo: any = {};
  playlistName = this.route.snapshot.paramMap.get("id");
  id: string;

  constructor(
    private route: ActivatedRoute,
    private playlistService: PlaylistsService,
    private songService: SongsService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.updatePlaylist();
  }

  updatePlaylist() {
    this.playlistService.getPlaylistSongs(this.playlistName).subscribe(data => {
      console.log("updated songs in playlist", data);
      this.songs = data[0].songs;
      this.id = data[0]._id;
    });
  }

  changeSelectedVideo(newLink: string) {
    console.log(newLink);
    newLink = newLink.replace("watch?v=", "embed/");
    this.selectedVideo = this.sanitizer.bypassSecurityTrustResourceUrl(newLink);
  }

  saveNewSong() {
    const { youtube_link, comment, order } = this.formInfo;
    console.log(this.formInfo);
    this.songService
      .save({ youtube_link, comment, playlist_id: this.id, order })
      .subscribe(data => this.updatePlaylist());
  }

  toggleSongStatus(_id, active) {
    this.songService.toggleSongStatus(_id, active).subscribe(data => {
      // this.updatePlaylist();
      this.songs = this.changeSongPropertie(_id, "active", !active);
    });
  }

  deleteSong(_id) {
    console.log("removendo");
    this.songService.deleteSong(_id).subscribe(data => {
      console.log(data);
      // this.updatePlaylist();
      this.songs = this.songs.filter(song => song._id != _id);
    });
  }

  changeSongPropertie(_id: string, propertie: any, newValue: any): any {
    return this.songs.map(song => {
      if (song._id == _id) {
        song[propertie] = newValue;
        return song;
      }
      return song;
    });
  }

  changeSongOrder(_id: string) {
    const newSongOrderString = prompt("What the new order for this song?");
    // console.log(newOrder);
    const newSongOrderNumber: number = parseInt(newSongOrderString);
    if (isNaN(newSongOrderNumber)) {
      return this.changeSongOrder(_id);
    }

    this.songService
      .updateSongOrder(_id, newSongOrderNumber)
      .subscribe(data => {
        this.songs = this.changeSongPropertie(_id, "order", newSongOrderNumber);
      });
  }
}

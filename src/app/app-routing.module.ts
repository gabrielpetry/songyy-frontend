import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlaylistsComponent } from "./playlists/playlists.component";
import { PlaylistManagerComponent } from "./playlist-manager/playlist-manager.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "playlist", component: PlaylistsComponent },
  { path: "playlist/:id", component: PlaylistManagerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

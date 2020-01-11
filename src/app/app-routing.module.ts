import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlaylistsComponent } from "./guards/playlists/playlists.component";
import { SongManagerComponent } from "./guards/song-manager/song-manager.component";
import { LogoutComponent } from "./guards/logout/logout.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { AuthService } from "./login/auth.service";
import { RegistrationComponent } from "./registration/registration.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
  { path: "playlist", component: PlaylistsComponent, canActivate: [AuthGuard] },
  { path: "logout", component: LogoutComponent, canActivate: [AuthGuard] },
  {
    path: "playlist/:playlistName/:guildId",
    component: SongManagerComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlaylistsComponent } from "./guards/playlists/playlists.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { SongManagerComponent } from "./guards/song-manager/song-manager.component";
import { LoginComponent } from "./login/login.component"; // Adicionei aqui
import { AuthService } from "./login/auth.service";
import { AuthGuard } from "./guards/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    SongManagerComponent,
    LoginComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}

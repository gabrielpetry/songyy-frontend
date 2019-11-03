import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private isUserAuthenticated: boolean = false;

  constructor(private httpClient: HttpClient, private router: Router) {}

  doLogin(user: any) {
    if (user.username == "petry") this.isUserAuthenticated = true;

    if (this.isUserAuthenticated) return this.router.navigate(["playlist"]);
  }
}

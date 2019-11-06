import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Service } from "../services/service";
import { LoggedUser } from "../models/loggedUser";

@Injectable({
  providedIn: "root"
})
export class AuthService extends Service {
  // private isUserAuthenticated: boolean = false;
  private loggedUser: LoggedUser;

  doLogin(user: any) {
    const { username, password } = user;

    return this.sendPostRequest<LoggedUser>("users/auth", {
      username,
      password
    });
  }

  setLoggedUser(loggedUser: LoggedUser): void {
    this.loggedUser = loggedUser;
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    localStorage.setItem("token", loggedUser.token);
    return;
  }

  getLoggedUser(): LoggedUser {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUser && !this.loggedUser) {
      this.loggedUser = loggedUser;
    }
    return this.loggedUser;
  }

  // setIsUserAuthenticated(status: boolean): void {
  // this.isUserAuthenticated = status;
  // return;
  // }

  // getIsUserAuthenticated(): boolean {
  //   return this.isUserAuthenticated;
  // }
}

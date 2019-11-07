import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.styl"]
})
export class LoginComponent implements OnInit {
  formInfo: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.authService.getLoggedUser())
      return this.router.navigate(["/playlist"]);
  }

  loginUser() {
    this.authService.doLogin(this.formInfo).subscribe(authUser => {
      if (!authUser.token) return false;

      this.authService.setLoggedUser(authUser);

      return this.router.navigate(["/playlist"]);
    });
  }
}

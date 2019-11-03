import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.styl"]
})
export class LoginComponent implements OnInit {
  formInfo: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  loginUser() {
    // this.authService.doLogin(this.formInfo);
  }
}

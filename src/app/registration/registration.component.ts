import { Component, OnInit } from "@angular/core";
import { AuthService } from "../login/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.styl"]
})
export class RegistrationComponent implements OnInit {
  formInfo: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
}

import { Component, OnInit } from "@angular/core";

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

import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../login/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.styl']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
      this.authService.doLogout();
      return this.router.navigate(['/login'])
  }

}

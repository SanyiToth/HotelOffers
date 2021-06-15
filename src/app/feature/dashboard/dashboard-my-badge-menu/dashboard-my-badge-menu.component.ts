import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../shared/auth/auth.service";

@Component({
  selector: 'app-dashboard-my-badge-menu',
  templateUrl: './dashboard-my-badge-menu.component.html',
  styleUrls: ['./dashboard-my-badge-menu.component.scss']
})
export class DashboardMyBadgeMenuComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  clickOnLogOut() {
    this.authService.logout();
  }
}

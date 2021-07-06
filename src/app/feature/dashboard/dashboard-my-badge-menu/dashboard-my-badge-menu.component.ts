import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../shared/auth/auth.service";
import {CurrentProviderService} from "../current-provider.service";

@Component({
  selector: 'app-dashboard-my-badge-menu',
  templateUrl: './dashboard-my-badge-menu.component.html',
  styleUrls: ['./dashboard-my-badge-menu.component.scss']
})
export class DashboardMyBadgeMenuComponent implements OnInit {

  providerName!: string;

  constructor(private authService: AuthService, private currentProvider: CurrentProviderService) {
  }

  ngOnInit(): void {
    this.providerName = this.currentProvider.getLoggedInProvider().name;
  }

  clickOnLogOut() {
    this.authService.logout();
  }
}

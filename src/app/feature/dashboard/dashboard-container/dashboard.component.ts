import {Component, OnInit} from '@angular/core';
import {CurrentProviderService} from "../current-provider.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  routeName: string;


  constructor(private currentProvider: CurrentProviderService) {
    this.routeName = "-Dashboard"
  }

  ngOnInit(): void {
  }

}

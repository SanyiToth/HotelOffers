import {Component, OnInit} from '@angular/core';
import {CurrentProviderService} from "../current-provider.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  routeName: string;


  constructor() {
    this.routeName = "-Dashboard"
  }

  ngOnInit(): void {
  }

}

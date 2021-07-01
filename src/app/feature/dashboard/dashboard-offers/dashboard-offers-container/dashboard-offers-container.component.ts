import { Component, OnInit } from '@angular/core';
import {Status} from "../../../../shared/services/offers/offer.interface";



@Component({
  selector: 'app-dashboard-offers-container',
  templateUrl: './dashboard-offers-container.component.html',
  styleUrls: ['./dashboard-offers-container.component.scss']
})
export class DashboardOffersContainerComponent implements OnInit {

  ngOnInit() {
    //this.offerservice.getOffersById(providerId, 'all')
  }

  statusChanged(status: Status) {
    console.log("status", status);
   // this.offerService.getOffersById(providerId, status)
  }

}

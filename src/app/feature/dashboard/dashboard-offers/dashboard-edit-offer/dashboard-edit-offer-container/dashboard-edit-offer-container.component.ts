import {Component, OnInit} from '@angular/core';
import {OffersService} from "../../../../../shared/services/offers/offers.service";
import {Offer} from "../../../../../shared/services/offers/offer.interface";


@Component({
  selector: 'app-dashboard-edit-offer-container',
  templateUrl: './dashboard-edit-offer-container.component.html',
  styleUrls: ['./dashboard-edit-offer-container.component.css']
})
export class DashboardEditOfferContainerComponent implements OnInit {

  generalFormData: any;

  constructor(private offersService: OffersService
  ) {
  }

  ngOnInit(): void {
  }

  getGeneralFormData(generalFormData: any) {
    this.generalFormData = generalFormData;
    console.log('generalFormData', this.generalFormData);

  }
}

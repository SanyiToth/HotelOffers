import { Component, OnInit, Input } from '@angular/core';
import { Offer } from "../../../../shared/services/offers/offer.interface";
import { OffersService } from "../../../../shared/services/offers/offers.service";


@Component({
  selector: 'app-dashboard-offer-list',
  templateUrl: './dashboard-offer-list.component.html',
  styleUrls: ['./dashboard-offer-list.component.scss']
})
export class DashboardOfferListComponent implements OnInit {


 @Input() offers: Offer[] = [];


  constructor(private offerService: OffersService) { }

  ngOnInit(): void {}

}

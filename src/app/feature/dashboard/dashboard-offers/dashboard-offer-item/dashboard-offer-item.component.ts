import {Component, Input, OnInit} from '@angular/core';
import { Offer } from "../../../../shared/services/offers/offer.interface";



@Component({
  selector: 'app-dashboard-offer-item',
  templateUrl: './dashboard-offer-item.component.html',
  styleUrls: ['./dashboard-offer-item.component.scss']
})
export class DashboardOfferItemComponent implements OnInit {

  @Input() data!: Offer;

  constructor() {

  }

  ngOnInit(): void {}
}

import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Offer} from "../../../../shared/services/offers/offer.interface";

@Component({
  selector: 'app-dashboard-offer-list',
  templateUrl: './dashboard-offer-list.component.html',
  styleUrls: ['./dashboard-offer-list.component.scss']
})
export class DashboardOfferListComponent implements OnInit {


  @Input() offers: Offer[] = [];
  @Output() deletedOfferToContainer = new EventEmitter<Offer>();
  deletedOffer!: Offer;

  constructor() {
  }

  ngOnInit(): void {
  }

  getDeletedOffer(event: Offer): void {
    this.deletedOffer = event;
    console.log('deleted offer', this.deletedOffer);
    this.deletedOfferToContainer.emit(event);

  }

}

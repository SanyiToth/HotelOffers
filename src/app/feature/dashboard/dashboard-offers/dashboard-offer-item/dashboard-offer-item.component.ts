import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Offer} from "../../../../shared/services/offers/offer.interface";


@Component({
  selector: 'app-dashboard-offer-item',
  templateUrl: './dashboard-offer-item.component.html',
  styleUrls: ['./dashboard-offer-item.component.scss']
})
export class DashboardOfferItemComponent implements OnInit {

  @Input() data!: Offer;
  @Output() deletedOffer = new EventEmitter<Offer>();

  constructor() {

  }

  ngOnInit(): void {
  }

  OnDelete(data: Offer) {
    if (confirm('Are you sure to delete this offer?')) {
      this.deletedOffer.emit(data)
    }
  }
}

import {Component, Input, OnInit} from '@angular/core';
import { Offer } from "../../../../shared/services/offers/offer.interface";
import { OffersService } from "../../../../shared/services/offers/offers.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-dashboard-offer-item',
  templateUrl: './dashboard-offer-item.component.html',
  styleUrls: ['./dashboard-offer-item.component.scss']
})
export class DashboardOfferItemComponent implements OnInit {

  @Input() data!: Offer;
  ID!: number

  constructor(private offer: OffersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    /*this.offer.getOffer(this.data.id).subscribe(data => {
      this.data = data;
      console.log("getOffer", data)
    })*/
    this.route.params.subscribe(params => {
      this.ID = params['id'];
      this.offer.getOffer(this.ID).subscribe(data => {
        this.data = data
        console.log(this.data)
      })
    })
  }}

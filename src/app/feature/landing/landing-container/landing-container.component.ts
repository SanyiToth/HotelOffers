import {Component, OnInit} from '@angular/core';
import {Offer} from "../../../shared/services/offers/offer.interface";
import {ActivatedRoute} from "@angular/router";
import {Stat} from "../../../shared/services/stat/stat.interface";

@Component({
  selector: 'app-landing-container',
  templateUrl: './landing-container.component.html',
  styleUrls: ['./landing-container.component.css']
})


export class LandingContainerComponent implements OnInit {
  offers: Offer[];
  ourNumbers!: Stat;


  constructor(private router: ActivatedRoute) {
    this.offers = this.router.snapshot.data.topOffers;
    this.ourNumbers = this.router.snapshot.data.stats;
  }


  ngOnInit(): void {
  }


}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap, tap} from "rxjs/operators";
import {OffersService} from "../../../shared/services/offers/offers.service";
import {Offer} from "../../../shared/services/offers/offer.interface";


@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {
  offer!: Offer;
  id: number | undefined;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private offersService: OffersService) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        tap(params => {
            this.id = params.id;
          }
        ),
        switchMap(() => this.offersService.getOffer(this.id)))
      .subscribe(response => {
        this.offer = response;
      }, error => {
        this.errorMessage = error;
      });
  }

}

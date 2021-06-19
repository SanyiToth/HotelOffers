import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap, tap} from "rxjs/operators";
import {OffersService} from "../../../shared/services/offers/offers.service";


@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {
  offer: any;
  id: any;
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
        console.log('offer',this.offer)
      }, error => {
        this.errorMessage = error;
      });
  }

}

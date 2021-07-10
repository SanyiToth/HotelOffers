import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap, tap} from "rxjs/operators";
import {OffersService} from "../../../shared/services/offers/offers.service";
import {Offer} from "../../../shared/services/offers/offer.interface";
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {OrderComponent} from 'src/app/shared/orders/order/order.component';


@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit,AfterViewInit {
  offer!: Offer;
  id!: number;
  errorMessage = '';
  displayBasic!: boolean;
  stars: string[] = [];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor(private route: ActivatedRoute, private offersService: OffersService, private dialog: MatDialog) {
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


  getStars(): string[] {
    for (let i = 1; i <= this.offer?.provider?.classification; i++) {
      this.stars.push('star');
    }
    return this.stars;
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = false;
    dialogConfig.maxWidth = "60vw";
    dialogConfig.width = '100%';
    const dialogRef = this.dialog.open(OrderComponent, dialogConfig);
  }

  ngAfterViewInit(): void {
    this.getStars();
  }


}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap, tap} from "rxjs/operators";
import {OffersService} from "../../../shared/services/offers/offers.service";
import {Offer} from "../../../shared/services/offers/offer.interface";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OrderComponent } from 'src/app/shared/orders/order/order.component';


@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {
  offer!: Offer;
  id: number | undefined;
  errorMessage = '';

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

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = false;    

    const dialogRef = this.dialog.open(OrderComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        console.log(data);
      }      
    )

  }

}

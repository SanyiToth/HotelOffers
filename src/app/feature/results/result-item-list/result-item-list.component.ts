import { Component, Input, OnInit } from '@angular/core';
import { Offer } from "../../../shared/services/offers/offer.interface";

@Component({
  selector: 'app-result-item-list',
  templateUrl: './result-item-list.component.html',
  styleUrls: ['./result-item-list.component.scss']
})
export class ResultItemListComponent implements OnInit {

@Input() items: Offer[] = [];

  constructor() {}

  ngOnInit(): void {
  }
}

import { Component, Input,  OnInit } from '@angular/core';
import {Offer} from "../../../shared/services/offers/offer.interface";


@Component({
  selector: 'app-result-item-card',
  templateUrl: 'result-item-card.component.html',
  styleUrls: ['./result-item-card.component.scss']
})
export class ResultItemCardComponent implements OnInit {

  @Input() data: Offer | any;

  constructor() { }

  ngOnInit() {
  }
}

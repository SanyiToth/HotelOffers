import {Component, Input, OnInit} from '@angular/core';
import {Statistics} from "../../../shared/services/statistics/statistics.interface";

@Component({
  selector: 'app-our-numbers',
  templateUrl: './our-numbers.component.html',
  styleUrls: ['./our-numbers.component.scss']
})
export class OurNumbersComponent implements OnInit {

  @Input() stats!: Statistics;

  constructor() {
  }

  ngOnInit(): void {
  }

}

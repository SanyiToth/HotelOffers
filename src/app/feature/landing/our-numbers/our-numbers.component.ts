import {Component, Input, OnInit} from '@angular/core';
import {Stat} from "../../../shared/services/stat/stat.interface";

@Component({
  selector: 'app-our-numbers',
  templateUrl: './our-numbers.component.html',
  styleUrls: ['./our-numbers.component.scss']
})
export class OurNumbersComponent implements OnInit {

  @Input() stats!: Stat;

  constructor() {
  }

  ngOnInit(): void {
  }

}

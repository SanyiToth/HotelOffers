import {Component, Input, OnInit} from '@angular/core';
import {Stats} from "./our-numbers.interface";

@Component({
  selector: 'app-our-numbers',
  templateUrl: './our-numbers.component.html',
  styleUrls: ['./our-numbers.component.scss']
})
export class OurNumbersComponent implements OnInit {

  @Input() stats: Stats | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}

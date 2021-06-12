import {Component, Input, OnInit} from '@angular/core';
import {Rating} from "./rating.interface";


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() data: Rating | undefined


  constructor() {
  }


  ngOnInit(): void {

  }

}

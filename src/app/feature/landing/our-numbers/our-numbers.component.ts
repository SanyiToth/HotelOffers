import { Component, OnInit } from '@angular/core';
import {OurNumbersService} from "../../../shared/services/our-numbers/our-numbers.service";
import { Stats } from "../../../shared/services/our-numbers/ourNumbers.interface";

@Component({
  selector: 'app-our-numbers',
  templateUrl: './our-numbers.component.html',
  styleUrls: ['./our-numbers.component.scss']
})
export class OurNumbersComponent implements OnInit {

  public stats: Stats[] = [];

  constructor(private stat: OurNumbersService) { }

  ngOnInit(): void {
    this.stat.getStats().subscribe(data => {
      this.stats = data;
    })
  }

}

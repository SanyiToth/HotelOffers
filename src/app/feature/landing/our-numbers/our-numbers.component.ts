import { Component, OnInit } from '@angular/core';
import {OurNumbersService} from "../../../core/services/our-numbers.service";
import { Stats } from "../../../core/interfaces/ourNumbers.interface";

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

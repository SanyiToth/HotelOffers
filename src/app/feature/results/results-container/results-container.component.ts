import {Component, OnInit, Output} from '@angular/core';
import { Location } from "../../../shared/services/result/location.interface";
import { LocationService } from "../../../shared/services/result/location.service";


@Component({
  selector: 'app-results-container',
  templateUrl: './results-container.component.html',
  styleUrls: ['./results-container.component.scss']
})
export class ResultsContainerComponent implements OnInit {

  constructor(private locationService: LocationService ) { }

  locations!: Location[];

  ngOnInit() {
    this.locationService.getLocation().subscribe( data => {
      this.locations = data;
    })
  }

}

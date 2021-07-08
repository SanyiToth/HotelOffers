import {Component, OnInit} from '@angular/core';
import {OffersService} from "../../../shared/services/offers/offers.service";


@Component({
  selector: 'app-heading-form',
  templateUrl: './heading-form.component.html',
  styleUrls: ['./heading-form.component.scss']
})
export class HeadingFormComponent implements OnInit {
  selected = ""
  cities: string[] = [
    'Budapest', 'Miskolc', 'Debrecen', 'Eger'
  ]

  constructor(private offersService: OffersService) {
  }


  onSubmit(): void {
    this.offersService.getOffersByCity('Siófok').subscribe(
      resp => {
        console.log('resp', resp);
      }
    )


  }

  ngOnInit(): void {
    this.setDefaultValues()
  }

  private setDefaultValues() {
    this.selected = this.cities[0]
  }
}

import { Component, OnInit } from '@angular/core';


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

  constructor() {}

  ngOnInit(): void {    
    this.setDefaultValues()
  }  

  private setDefaultValues() {
    this.selected = this.cities[0]
  }
}

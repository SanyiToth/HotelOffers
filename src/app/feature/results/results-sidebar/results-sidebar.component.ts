import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './results-sidebar.component.html',
  styleUrls: ['./results-sidebar.component.scss']
})
export class ResultsSidebarComponent  {

  isSubmitted = false;
  Cities: string[] = ['Aclieburgh', 'Diasnard', 'Sheim', 'Oitshire', 'Crokby', 'Elesgan', 'Wirburgh'];


  // Form
  citySelector: FormGroup = this.fb.group({
    cityName: ['', [Validators.required]],
    guestNumber: ['', [Validators.required]]
  })

  constructor(public fb: FormBuilder) {
  }

  // Choose city
  selectCity(event: any) {
    this.cityName!.setValue(event.target.value, {
      onlySelf: true
    })
  }
  //Submit
  onSubmit() {
    this.isSubmitted = true;
  }

  // formControl access
  get cityName(): AbstractControl | null {
    return this.citySelector.get('cityName')
  }

}

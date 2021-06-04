import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  {

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
    console.log(event.value)
    this.cityName!.setValue(event.target.value, {
      onlySelf: true
    })
  }
  //Submit
  onSubmit() {
    this.isSubmitted = true;
    console.log(this.citySelector.value)
  }

  // formControl access
  get cityName(): AbstractControl | null {
    return this.citySelector.get('cityName')
  }

}

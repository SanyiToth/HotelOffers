import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, AbstractControl, FormArray} from '@angular/forms';
import { HotelsService } from "../../../shared/services/hotels/hotels.service";
import {Hotel} from "../../../shared/services/hotels/hotel.interface";


@Component({
  selector: 'app-sidebar',
  templateUrl: './results-sidebar.component.html',
  styleUrls: ['./results-sidebar.component.scss']
})
export class ResultsSidebarComponent  {

  @Input() Cities: Hotel[] = [];

  @Output() sendData: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  isSubmitted = false;


  // Form
  citySelectorForm: FormGroup = this.fb.group({
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
    this.sendData.emit(this.citySelectorForm.value);
  }

  // formControl access
  get cityName(): AbstractControl | null {
    return this.citySelectorForm.get('cityName')
  }


}

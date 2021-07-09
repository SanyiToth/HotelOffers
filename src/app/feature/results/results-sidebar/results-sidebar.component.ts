import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl,} from '@angular/forms';
import { Location } from "../../../shared/services/result/location.interface";
import { SearchRequest } from "../../../shared/services/result/search-request";


@Component({
  selector: 'app-sidebar',
  templateUrl: './results-sidebar.component.html',
  styleUrls: ['./results-sidebar.component.scss']
})
export class ResultsSidebarComponent {

  @Input() cities!: string[];

  @Output() sendData: EventEmitter<SearchRequest> = new EventEmitter<SearchRequest>();

  isSubmitted = false;


  // Form
  citySelectorForm: FormGroup = this.fb.group({
    city: ['', [Validators.required]],
    guestNumber: [2, [Validators.required]]
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
    this.sendData.emit(this.citySelectorForm.value as SearchRequest);

  }
  // formControl access
  get cityName(): AbstractControl | null {
    return this.citySelectorForm.get('cityName')
  }



}

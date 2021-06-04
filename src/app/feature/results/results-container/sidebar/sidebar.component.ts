import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  citySelector: FormGroup = this.fb.group({
    cityName: ['', [Validators.required]],
    guestNumber: ['', Validators.required]
  })
  isSubmitted = false;
  Cities: string[] = ['Aclieburgh', 'Diasnard', 'Sheim', 'Oitshire', 'Crokby', 'Elesgan', 'Wirburgh'];


  // City Names


  constructor(public fb: FormBuilder) {


  }


  /// Form

  // Choose city
  changeCity(event: any) {
    console.log(event.value)
    this.cityName!.setValue(event.target.value, {
      onlySelf: true
    })
  }

  // formControl access
  get cityName() {
    return this.citySelector.get('cityName')
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.citySelector.value)
  }

  ngOnInit(): void {
  }

}

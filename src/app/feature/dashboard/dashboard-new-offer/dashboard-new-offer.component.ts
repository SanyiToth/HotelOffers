import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {Observable} from "rxjs";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatAutocomplete, MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {map, startWith} from "rxjs/operators";
import {MatChipInputEvent} from "@angular/material/chips";


@Component({
  selector: 'app-dashboard-new-offer',
  templateUrl: './dashboard-new-offer.component.html',
  styleUrls: ['./dashboard-new-offer.component.scss']
})
export class DashboardNewOfferComponent {

  visible = true;
  selectable = true;
  removable = true;
  tagCtrl = new FormControl();
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredTags: Observable<string[]> | undefined;
  tagsArray: string[];
  allTags: string[] = ['Wifi', 'Free parking', 'Swimming pool', 'Beachfront', 'All inclusive', 'Breakfast included'];
  payArr: string[] = [];


  // @ts-ignore
  @ViewChild('tagsInput') tagInput: ElementRef<HTMLInputElement>;
  // @ts-ignore
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {


    this.firstFormGroup = this.fb.group({
      heading: ['', Validators.required],
      details: ['', [Validators.required, Validators.maxLength(50)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      availableOffers: [{value: '', disabled: false}, Validators.required],
      price: ['', Validators.required]

    });

    this.secondFormGroup = this.fb.group({
      description: ['', [Validators.required, Validators.maxLength(300)]],
      tags: [['Wifi'], [Validators.required]],
      paymentMethods: this.fb.group({
        cash: false,
        bankCard: false,
        bankTransfer: false,
        szepKartya: false,
      })
    });

    this.thirdFormGroup = this.fb.group({})


    this.tagsArray = this.tags?.value
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice()));
  }


  onSubmit() {
    console.log(this.firstFormGroup.value)
    console.log(this.secondFormGroup.value)
  }

  onChange() {
    if (this.availableOffers?.disabled) {
      this.availableOffers.enable();
      this.availableOffers?.reset();
    } else {
      this.availableOffers?.disable();
      this.availableOffers?.reset();
    }
  }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.tagsArray.push(value);
    }
    event.chipInput!.clear();
    this.tagCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.tagsArray.indexOf(fruit);
    if (index >= 0) {
      this.tagsArray.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tagsArray.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allTags.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
  }

  get heading(): AbstractControl | null {
    return this.firstFormGroup.get('heading');
  }

  get details(): AbstractControl | null {
    return this.firstFormGroup.get('details');
  }

  get startDate(): AbstractControl | null {
    return this.firstFormGroup.get('startDate');
  }

  get endDate(): AbstractControl | null {
    return this.firstFormGroup.get('endDate');
  }

  get availableOffers(): AbstractControl | null {
    return this.firstFormGroup.get('availableOffers');
  }

  get price(): AbstractControl | null {
    return this.firstFormGroup.get('price');
  }

  get description(): AbstractControl | null {
    return this.secondFormGroup.get('description');
  }

  get tags(): AbstractControl | null {
    return this.secondFormGroup.get('tags');
  }

  get paymentMethods(): any {
    return this.secondFormGroup.get('paymentMethods')
  }
}

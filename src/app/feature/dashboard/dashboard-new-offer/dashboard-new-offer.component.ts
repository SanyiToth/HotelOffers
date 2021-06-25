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
import {environment} from "../../../../environments/environment";
import {OffersService} from "../../../shared/services/offers/offers.service";


@Component({
  selector: 'app-dashboard-new-offer',
  templateUrl: './dashboard-new-offer.component.html',
  styleUrls: ['./dashboard-new-offer.component.scss']
})


export class DashboardNewOfferComponent {
  isLinear = true;
  static readonly DETAILS_MAX_LENGTH = 50;
  static readonly DESCRIPTION_MAX_LENGTH = 300;
  selectable = true;
  removable = true;
  tagCtrl = new FormControl();
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredTags: Observable<string[]> | undefined;
  tagsArray: string[];
  allTags: string[] = environment.OFFER_EXTRAS
  newOffer: any;
  imagesUrl: any[] = [];


  // @ts-ignore
  @ViewChild('tagsInput') tagInput: ElementRef<HTMLInputElement>;
  // @ts-ignore
  @ViewChild('autocompleteInput') matAutocomplete: MatAutocomplete;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private offerService: OffersService) {


    this.firstFormGroup = this.fb.group({
      heading: ['', Validators.required],
      details: ['', [Validators.required, Validators.maxLength(DashboardNewOfferComponent.DETAILS_MAX_LENGTH)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      availableOffers: [{value: '', disabled: false}, Validators.required],
      price: ['', Validators.required]

    });

    this.secondFormGroup = this.fb.group({
      description: ['', [Validators.required, Validators.maxLength(DashboardNewOfferComponent.DESCRIPTION_MAX_LENGTH)]],
      tags: [['Wifi']],
      paymentMethods: this.fb.group({
        cash: [false, Validators.requiredTrue],
        bankCard: false,
        bankTransfer: false,
        szepKartya: false,
      },)
    });

    this.thirdFormGroup = this.fb.group({})


    this.tagsArray = this.tags?.value
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice()));
  }


  onSubmit() {
    this.newOffer = {
      heading: this.heading?.value,
      details: this.details?.value,
      dateInterval: {
        startDate: this.startDate?.value,
        endDate: this.endDate?.value
      },
      availableOffers: this.availableOffers?.value,
      price: this.price?.value,
      images: this.imagesUrl,
      description: this.description?.value,
      tags: this.tags?.value,
      ratingInfo: {
        rating: 5,
        numberOfRatings: 25
      }
    }
    console.log('offer', this.newOffer)
    this.offerService.createOffer(this.newOffer).subscribe(response => {
      console.log("response", response)
    })
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

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.tagsArray.push(value);
    }
    event.chipInput!.clear();
    this.tagCtrl.setValue(null);
  }

  removeTag(tag: string): void {
    const index = this.tagsArray.indexOf(tag);
    if (index >= 0) {
      this.tagsArray.splice(index, 1);
    }
  }

  selectedTag(event: MatAutocompleteSelectedEvent): void {
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


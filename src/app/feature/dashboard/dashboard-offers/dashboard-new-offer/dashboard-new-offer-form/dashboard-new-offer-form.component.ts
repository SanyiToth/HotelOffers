import {Component, ElementRef, OnInit, ViewChild, EventEmitter, Output, Input} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Observable} from "rxjs";
import {environment} from "../../../../../../environments/environment";
import {Image, NewOffer, Status} from "../../../../../shared/services/offers/offer.interface";
import {MatAutocomplete, MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {map, startWith} from "rxjs/operators";
import {MatChipInputEvent} from "@angular/material/chips";

@Component({
  selector: 'app-dashboard-new-offer-form',
  templateUrl: './dashboard-new-offer-form.component.html',
  styleUrls: ['./dashboard-new-offer-form.component.scss']
})
export class DashboardNewOfferFormComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  //mat-stepper
  isLinear = true;

  //firstFormGroup Validators Magic Numbers
  static readonly DETAILS_MAX_LENGTH = 300;
  static readonly DESCRIPTION_MAX_LENGTH = 2000;

  //mat-chip
  selectable = true;
  removable = true;
  tagCtrl = new FormControl();
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredTags: Observable<string[]> | undefined;
  tagsArray: string[];
  allTags: string[] = environment.OFFER_EXTRAS

  //new Offer data
  @Output() offerToParent = new EventEmitter<NewOffer>();
  offer!: NewOffer;
  imagesData: Image[] = [];
  @Input() providerId!: string;


  @ViewChild('tagsInput') tagInput!: ElementRef<HTMLInputElement>;
  @ViewChild('autocompleteInput') matAutocomplete!: MatAutocomplete;


  constructor(private fb: FormBuilder) {


    this.firstFormGroup = this.fb.group({
      heading: ['', Validators.required],
      details: ['', [Validators.required, Validators.maxLength(DashboardNewOfferFormComponent.DETAILS_MAX_LENGTH)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      availableOffers: [{value: '', disabled: false}, Validators.required],
      price: ['', Validators.required]

    });

    this.secondFormGroup = this.fb.group({
      description: ['', [Validators.required, Validators.maxLength(DashboardNewOfferFormComponent.DESCRIPTION_MAX_LENGTH)]],
      tags: [['Wifi']]
    });


    this.tagsArray = this.tags?.value
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice()));
  }


  // The component get image data from img-uploader component

  addImgData(updatedImages: Image[]) {
    this.imagesData = updatedImages;
  }

  //Submit event send data to db

  onSubmit() {
    this.offer = {
      status: Status.Draft,
      heading: this.heading?.value,
      details: this.details?.value,
      dateInterval: {
        startDate: this.startDate?.value,
        endDate: this.endDate?.value
      },
      availableOffers: this.availableOffers?.value,
      price: this.price?.value,
      images: this.imagesData,
      description: this.description?.value,
      tags: this.tags?.value,
      provider: this.providerId
    }
    this.offerToParent.emit(this.offer);
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
    this.imagesData = [];

  }

  //Limitless available offers

  onChange() {
    if (this.availableOffers?.disabled) {
      this.availableOffers.enable();
      this.availableOffers?.reset();
    } else {
      this.availableOffers?.disable();
      this.availableOffers?.reset();
    }
  }


  //Material Chip methods

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

  //FormControl getters

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

  ngOnInit(): void {
  }
}


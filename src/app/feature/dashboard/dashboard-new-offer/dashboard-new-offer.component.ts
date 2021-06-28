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
import {Image, Offer} from "../../../shared/services/offers/offer.interface";
import {ErrorMessage} from "@angular/compiler-cli/ngcc/src/execution/cluster/api";
import {Router} from "@angular/router";


@Component({
  selector: 'app-dashboard-new-offer',
  templateUrl: './dashboard-new-offer.component.html',
  styleUrls: ['./dashboard-new-offer.component.scss']
})


export class DashboardNewOfferComponent {

  //forms
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  //mat-stepper
  isLinear = false;

  //firstFormGroup Validators Magic Numbers
  static readonly DETAILS_MAX_LENGTH = 50;
  static readonly DESCRIPTION_MAX_LENGTH = 300;

  //mat-chip
  selectable = true;
  removable = true;
  tagCtrl = new FormControl();
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredTags: Observable<string[]> | undefined;
  tagsArray: string[];
  allTags: string[] = environment.OFFER_EXTRAS


  //new Offer data
  newOffer!: Offer;
  imagesData: Image[];
  errorMessage!: ErrorMessage;


  // @ts-ignore
  @ViewChild('tagsInput') tagInput: ElementRef<HTMLInputElement>;
  // @ts-ignore
  @ViewChild('autocompleteInput') matAutocomplete: MatAutocomplete;


  constructor(private fb: FormBuilder,
              private offerService: OffersService,
              private router: Router) {
    this.imagesData = [];
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
    this.newOffer = {
      status: 'Draft',
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
      tags: this.tags?.value
    }
    this.offerService.createOffer(this.newOffer).subscribe(response => {
      this.firstFormGroup.reset();
      this.secondFormGroup.reset();
      this.imagesData = [];
      setTimeout(() => {
        this.router.navigate(['/dashboard/offers']);
      }, 1000)
    }, error => {
      this.errorMessage = error;
    })
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
}


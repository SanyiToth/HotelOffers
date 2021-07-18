import {Component, ElementRef, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Observable} from "rxjs";
import {environment} from "../../../../../../environments/environment";
import {map, startWith} from "rxjs/operators";
import {MatChipInputEvent} from "@angular/material/chips";
import {MatAutocomplete, MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {Offer} from "../../../../../shared/services/offers/offer.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard-edit-offer-detailed',
  templateUrl: './dashboard-edit-offer-detailed.component.html',
  styleUrls: ['./dashboard-edit-offer-detailed.component.css']
})
export class DashboardEditOfferDetailedComponent implements OnInit {

  readonly DESCRIPTION_MAX_LENGTH = 2000;
  detailedFormGroup: FormGroup;


  //mat-chip
  selectable = true;
  removable = true;
  tagCtrl = new FormControl();
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredTags!: Observable<string[]>;
  tagsArray!: string[];
  allTags: string[] = environment.OFFER_EXTRAS
  offer: Offer = this.route.snapshot.data.offer;
  @Output() detailedFormDataToParent = new EventEmitter<any>();

  @ViewChild('tagsInput') tagInput!: ElementRef<HTMLInputElement>;
  @ViewChild('autocompleteInput') matAutocomplete!: MatAutocomplete;


  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.detailedFormGroup = this.fb.group({
      description: ['', [Validators.required, Validators.maxLength(this.DESCRIPTION_MAX_LENGTH)]],
      tags: [['Wifi']]
    });

    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice()));
  }

  ngOnInit(): void {
    this.detailedFormGroup.setValue({
      description: this.offer.description,
      tags: this.offer.tags
    });
    this.tagsArray = this.tags?.value;

    this.detailedFormGroup.valueChanges
      .subscribe(() => {
        this.detailedFormDataToParent.emit(this.detailedFormGroup.value)
      })
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


  get description(): AbstractControl | null {
    return this.detailedFormGroup.get('description');
  }

  get tags(): AbstractControl | null {
    return this.detailedFormGroup.get('tags');
  }


}

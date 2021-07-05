import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SearchRequest} from "../../../shared/services/result/search-request";



@Component({
  selector: 'app-heading-form',
  templateUrl: './heading-form.component.html',
  styleUrls: ['./heading-form.component.scss']
})
export class HeadingFormComponent implements OnInit {


  city!: string;
  guestNumber!: number;

  @Input() cities!: string[];

  selectedValues!: SearchRequest;

  @Output() selectedValuesToParent = new EventEmitter<SearchRequest>();

  ngOnInit(): void {
  }

  OnShowResults() {
    if (this.city && this.guestNumber) {
      this.selectedValues = {
        city: this.city,
        guestNumber: this.guestNumber
      }
      this.selectedValuesToParent.emit(this.selectedValues);
    }


  }
}

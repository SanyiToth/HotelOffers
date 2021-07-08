import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SearchRequest} from "../../../shared/services/result/search-request";


@Component({
  selector: 'app-heading-form',
  templateUrl: './heading-form.component.html',
  styleUrls: ['./heading-form.component.scss']
})
export class HeadingFormComponent implements OnInit {
  city!: string;

  @Input() cities!: string[];
  @Output() selectedValueToParent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onShowResults() {
    if (this.city) {
      this.selectedValueToParent.emit(this.city);
    }
  }
}

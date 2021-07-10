import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-heading-form',
  templateUrl: './heading-form.component.html',
  styleUrls: ['./heading-form.component.scss']
})
export class HeadingFormComponent implements OnInit {
  city!: string;

  @Input() cities!: string[];
  @Output() selectedValueToParent = new EventEmitter<string>();

  buttonToggle: boolean = true

  ngOnInit(): void {
  }

  onChange() {
    if (this.city) {
      this.buttonToggle = false
    }
  }

  onShowResults() {
    if (this.city) {

      this.selectedValueToParent.emit(this.city);
    }
  }
}

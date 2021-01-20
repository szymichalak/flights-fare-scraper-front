import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {

  constructor() { }
  @Input() labels: Array<string> = [];
  @Input() dropdownDefaultName: string = '';
  @Input() changableLabel: boolean = true;

  @Output() clickedOption = new EventEmitter<number>();

  selected: number | undefined;

  ngOnInit(): void {
  }

  optionChanged(i: number) {
    this.clickedOption.emit(i);
    this.selected = i;
    if (this.changableLabel) {
      this.dropdownDefaultName = this.labels[i];
    }
  }
}

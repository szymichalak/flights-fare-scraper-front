import { Component, Input, OnInit } from '@angular/core';
import { ScreenSize } from 'src/app/enums/screen-size.enum';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }
  @Input() mainLabel: string = '';
  @Input() placeholder: string = '';
  @Input() value: number = 0;
  @Input() min: number = 0;
  @Input() max: number = 10;
  @Input() screenSize: ScreenSize = ScreenSize.xs;

  inputWidth = 50;

  ngOnInit(): void {
    switch(this.screenSize) {
      case ScreenSize.xs:
        this.inputWidth = 50;
        break;
      case ScreenSize.sm:
        this.inputWidth = 75;
        break;
      case ScreenSize.md:
        this.inputWidth = 100;
        break;
      case ScreenSize.lg:
        this.inputWidth = 100;
        break;            
      case ScreenSize.xl:
        this.inputWidth = 100;
        break;
    }
  }

  changeValue(value: string) {
    this.value = this.value + parseInt(value);
    if (this.value < this.min) {
      this.value += 1;
    } else if (this.value > this.max) {
      this.value -= 1;
    }
  }

}

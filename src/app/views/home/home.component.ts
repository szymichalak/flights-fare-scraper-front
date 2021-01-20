import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  async ngOnInit(): Promise<void> {
    for (let i=0; i<5; i++) {
      await this.sleep(2500);
      document.getElementById('test')?.classList.toggle("fade");
    }

  }

  async sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}

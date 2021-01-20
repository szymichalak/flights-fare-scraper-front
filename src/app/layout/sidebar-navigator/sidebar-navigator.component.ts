import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-navigator',
  templateUrl: './sidebar-navigator.component.html',
  styleUrls: ['./sidebar-navigator.component.scss']
})
export class SidebarNavigatorComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goto(path: string) {
    this._router.navigate([path])
  }

}

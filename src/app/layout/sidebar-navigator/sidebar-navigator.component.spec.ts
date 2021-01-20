import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavigatorComponent } from './sidebar-navigator.component';

describe('SidebarNavigatorComponent', () => {
  let component: SidebarNavigatorComponent;
  let fixture: ComponentFixture<SidebarNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarNavigatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

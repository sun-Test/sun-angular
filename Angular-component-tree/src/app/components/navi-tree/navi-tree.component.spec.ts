import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviTreeComponent } from './navi-tree.component';

describe('NaviTreeComponent', () => {
  let component: NaviTreeComponent;
  let fixture: ComponentFixture<NaviTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaviTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

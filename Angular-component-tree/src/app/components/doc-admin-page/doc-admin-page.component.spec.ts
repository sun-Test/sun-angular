import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocAdminPageComponent } from './doc-admin-page.component';

describe('DocAdminPageComponent', () => {
  let component: DocAdminPageComponent;
  let fixture: ComponentFixture<DocAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

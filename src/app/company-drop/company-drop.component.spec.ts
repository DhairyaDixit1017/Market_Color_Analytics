import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDropComponent } from './company-drop.component';

describe('CompanyDropComponent', () => {
  let component: CompanyDropComponent;
  let fixture: ComponentFixture<CompanyDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

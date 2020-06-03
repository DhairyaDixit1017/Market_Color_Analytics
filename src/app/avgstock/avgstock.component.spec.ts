import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgstockComponent } from './avgstock.component';

describe('AvgstockComponent', () => {
  let component: AvgstockComponent;
  let fixture: ComponentFixture<AvgstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvgstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgvolsecComponent } from './avgvolsec.component';

describe('AvgvolsecComponent', () => {
  let component: AvgvolsecComponent;
  let fixture: ComponentFixture<AvgvolsecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvgvolsecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgvolsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

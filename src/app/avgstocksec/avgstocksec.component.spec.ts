import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgstocksecComponent } from './avgstocksec.component';

describe('AvgstocksecComponent', () => {
  let component: AvgstocksecComponent;
  let fixture: ComponentFixture<AvgstocksecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvgstocksecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgstocksecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

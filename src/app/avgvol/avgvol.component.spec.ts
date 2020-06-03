import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgvolComponent } from './avgvol.component';

describe('AvgvolComponent', () => {
  let component: AvgvolComponent;
  let fixture: ComponentFixture<AvgvolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvgvolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgvolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

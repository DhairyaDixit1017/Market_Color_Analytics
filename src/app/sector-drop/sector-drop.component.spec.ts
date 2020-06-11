import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorDropComponent } from './sector-drop.component';

describe('SectorDropComponent', () => {
  let component: SectorDropComponent;
  let fixture: ComponentFixture<SectorDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

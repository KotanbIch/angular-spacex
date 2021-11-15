import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandPadsComponent } from './land-pads.component';

describe('LandPadsComponent', () => {
  let component: LandPadsComponent;
  let fixture: ComponentFixture<LandPadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandPadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandPadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

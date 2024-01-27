import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticalInformationComponent } from './praticalinformation.component';

describe('PraticalinformationComponent', () => {
  let component: PraticalInformationComponent;
  let fixture: ComponentFixture<PraticalInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PraticalInformationComponent]
    });
    fixture = TestBed.createComponent(PraticalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

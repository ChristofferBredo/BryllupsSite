import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoedvigKroComponent } from './roedvig-kro.component';

describe('RoedvigKroComponent', () => {
  let component: RoedvigKroComponent;
  let fixture: ComponentFixture<RoedvigKroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoedvigKroComponent]
    });
    fixture = TestBed.createComponent(RoedvigKroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoedvigKroComponent } from './roedvig-kro.component';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';

describe('RoedvigKroComponent', () => {
  let component: RoedvigKroComponent;
  let fixture: ComponentFixture<RoedvigKroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoedvigKroComponent, MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent]
    });
    fixture = TestBed.createComponent(RoedvigKroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

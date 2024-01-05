import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndslagComponent } from './indslag.component';

describe('IndslagComponent', () => {
  let component: IndslagComponent;
  let fixture: ComponentFixture<IndslagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndslagComponent]
    });
    fixture = TestBed.createComponent(IndslagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

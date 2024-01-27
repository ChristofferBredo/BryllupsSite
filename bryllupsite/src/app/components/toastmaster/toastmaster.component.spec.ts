import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastmasterComponent } from './toastmaster.component';

describe('ToastmasterComponent', () => {
  let component: ToastmasterComponent;
  let fixture: ComponentFixture<ToastmasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToastmasterComponent]
    });
    fixture = TestBed.createComponent(ToastmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

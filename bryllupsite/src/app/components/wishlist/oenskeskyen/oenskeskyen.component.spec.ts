import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OenskeskyenComponent } from './oenskeskyen.component';

describe('OenskeskyenComponent', () => {
  let component: OenskeskyenComponent;
  let fixture: ComponentFixture<OenskeskyenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OenskeskyenComponent]
    });
    fixture = TestBed.createComponent(OenskeskyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

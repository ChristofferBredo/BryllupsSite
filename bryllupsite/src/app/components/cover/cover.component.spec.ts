import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverComponent } from './cover.component';
import { MockComponent } from 'ng-mocks';
import { NavtabsComponent } from '../navtabs/navtabs.component';

describe('CoverComponent', () => {
  let component: CoverComponent;
  let fixture: ComponentFixture<CoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoverComponent,
        MockComponent(NavtabsComponent)]
    });
    fixture = TestBed.createComponent(CoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

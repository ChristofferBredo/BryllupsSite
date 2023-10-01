import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavtabsComponent } from './navtabs.component';
import { MockComponent } from 'ng-mocks';
import { MatTabLink, MatTabNav } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavtabsComponent', () => {
  let component: NavtabsComponent;
  let fixture: ComponentFixture<NavtabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavtabsComponent,
        MockComponent(MatTabNav),
        MockComponent(MatTabLink)],
    });
    fixture = TestBed.createComponent(NavtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

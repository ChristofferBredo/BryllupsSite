import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendaComponent } from '../agenda/agenda.component';
import { MockComponent } from 'ng-mocks';

import { HomeComponent } from './home.component';
import { LocationComponent } from '../location/location.component';
import { HomeItemComponent } from './home-item/home-item.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        MockComponent(HomeItemComponent)
      ],
      
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

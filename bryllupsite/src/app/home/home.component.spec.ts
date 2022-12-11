import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendaItemComponent } from '../components/agenda-item/agenda-item.component';
import { AgendaComponent } from '../components/agenda/agenda.component';
import { TimePipe } from '../pipes/time.pipe';
import {MockComponent} from 'ng-mocks';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
        MockComponent(AgendaComponent)
      ]
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

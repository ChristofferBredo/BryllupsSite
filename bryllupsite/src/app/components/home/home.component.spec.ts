import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendaComponent } from '../agenda/agenda.component';
import { MockComponent } from 'ng-mocks';

import { HomeComponent } from './home.component';
import { LocationComponent } from '../location/location.component';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatList, MatListItem } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        MatCard,
        MatCardContent,
        MatGridList,
        MatGridTile,
        MatList,
        MatListItem,
        MatDivider,
        MatCardTitle
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

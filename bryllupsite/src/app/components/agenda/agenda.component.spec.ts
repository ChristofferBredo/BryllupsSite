import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { AgendaItemComponent } from '../agenda-item/agenda-item.component';

import { AgendaComponent } from './agenda.component';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatList, MatListItem } from '@angular/material/list';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';

describe('AgendaComponent', () => {
  let component: AgendaComponent;
  let fixture: ComponentFixture<AgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        AgendaComponent, 
        MockComponent(AgendaItemComponent),
        MatCard,
        MatCardHeader,
        MatCardContent,
        MatDivider,
        MatList,
        MatListItem,
        MatGridList,
        MatGridTile
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

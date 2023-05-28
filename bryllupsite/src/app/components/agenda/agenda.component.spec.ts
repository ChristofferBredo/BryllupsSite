import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { AgendaItemComponent } from '../agenda-item/agenda-item.component';

import { AgendaComponent } from './agenda.component';
import { MatCard, MatCardHeader } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatList, MatListItem } from '@angular/material/list';

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
        MatDivider,
        MatList,
        MatListItem
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

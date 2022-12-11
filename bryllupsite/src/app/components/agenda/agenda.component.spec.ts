import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimePipe } from 'src/app/pipes/time.pipe';
import { AgendaItemComponent } from '../agenda-item/agenda-item.component';

import { AgendaComponent } from './agenda.component';

describe('AgendaComponent', () => {
  let component: AgendaComponent;
  let fixture: ComponentFixture<AgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaComponent, AgendaItemComponent, TimePipe ]
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

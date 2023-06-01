import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimePipe } from 'src/app/pipes/time.pipe';
import { AgendaItemComponent } from './agenda-item.component';
import { AgendaItem } from './agenda-item';
import { MockComponent, MockPipe } from 'ng-mocks';
import { MatDivider } from '@angular/material/divider';

describe('AgendaItemComponent', () => {
  let component: AgendaItemComponent;
  let fixture: ComponentFixture<AgendaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        AgendaItemComponent,
        MockPipe(TimePipe),
        MatDivider
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaItemComponent);
    component = fixture.componentInstance;
    var expectedAgendaItem = new AgendaItem({hours: 15, minutes: 30}, "Test desc")
    component.agendaItem = expectedAgendaItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

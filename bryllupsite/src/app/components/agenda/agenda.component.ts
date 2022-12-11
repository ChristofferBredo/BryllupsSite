import { Component } from '@angular/core';
import { AgendaItem } from '../agenda-item/agenda-item';

@Component({
  selector: 'agenda-comp',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent {

  agendaItems : AgendaItem[] = [
    {
      time: {hours: 15, minutes: 30},
      description: "Reception"
    }
  ] 

}

import { Component } from '@angular/core';
import { AgendaItem } from '../agenda-item/agenda-item';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {

  agendaTitle = "Agenda";

  agendaItems : AgendaItem[] = [
    {
      time: {hours: 15, minutes: 30},
      description: "Ankomst til Rødvig Kro"
    },
    {
      time: {hours: 16, minutes: 0},
      description: "Borgerlig vielse i parken"
    },
    {
      time: {hours: 0, minutes: 0},
      description: "Reception"
    },
    {
      time: {hours: 16, minutes: 0},
      description: "Vi går til bords"
    }
  ] 

}

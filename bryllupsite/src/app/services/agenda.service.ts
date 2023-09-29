import { Injectable } from '@angular/core';
import { AgendaItem } from '../components/agenda-item/agenda-item';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  agendaItems: AgendaItem[] = [
    {
      time: { hours: 15, minutes: 30 },
      description: "Ankomst til Rødvig Kro"
    },
    {
      time: { hours: 16, minutes: 0 },
      description: "Borgerlig vielse i parken"
    },
    {
      time: { hours: 0, minutes: 0 },
      description: "Reception"
    },
    {
      time: { hours: 16, minutes: 0 },
      description: "Vi går til bords"
    }
  ]

  constructor() { }

  GetAgendaItems() {
    return this.agendaItems;
  }

}

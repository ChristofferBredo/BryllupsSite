import { Injectable } from '@angular/core'
import { AgendaItem } from '../components/agenda-item/agenda-item'

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  agendaItems: AgendaItem[] = [
    {
      time: { hours: 14, minutes: 0 },
      description: 'Borgerlig vielse i parken'
    },
    {
      time: { hours: 14, minutes: 30 },
      description: 'Check-in på værelser, gøre klar til festen'
    },
    {
      time: { hours: 15, minutes: 0 },
      description: 'Reception med kage og kaffe'
    },
    {
      time: { hours: 18, minutes: 0 },
      description: 'Vi går til bords med god mad og indslag'
    },
    {
      time: { hours: 23, minutes: 30 },
      description: 'Brudevals'
    },
    {
      time: { hours: 0, minutes: 0 },
      description: 'Dansegulvet åbner med DJ'
    },
    {
      time: { hours: 1, minutes: 0 },
      description: 'Natmad'
    }
  ]

  GetAgendaItems(): AgendaItem[] {
    return this.agendaItems
  }
}

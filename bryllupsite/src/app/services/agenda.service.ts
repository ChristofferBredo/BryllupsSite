import { Injectable } from '@angular/core'
import { AgendaItem } from '../components/agenda-item/agenda-item'

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  agendaItems: AgendaItem[] = [
    {
      time: { hours: 14, minutes: 0 },
      description: 'Vielse'
    },
    {
      time: { hours: 14, minutes: 30},
      description: 'Bobler i krohaven'
    },
    {
      time: { hours: 15, minutes: 0 },
      description: 'Reception'
    },
    {
      time: { hours: 17, minutes: 30 },
      description: 'Vi går til bords'
    },
    {
      time: { hours: 23, minutes: 45 },
      description: 'Brudevals'
    },
    {
      time: { hours: 0, minutes: 0 },
      description: 'Dansegulvet åbner'
    },
    {
      time: { hours: 1, minutes: 30 },
      description: 'Natmad'
    },
    {
      time: { hours: 4, minutes: 0},
      description: 'Tak for i aften'
    }
  ]

  GetAgendaItems(): AgendaItem[] {
    return this.agendaItems
  }
}

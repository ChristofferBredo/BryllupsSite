import { Component, OnInit } from '@angular/core'
import { AgendaItem } from '../agenda-item/agenda-item'
import { AgendaService } from 'src/app/services/agenda.service'

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  agendaTitle = 'Tidsplan'
  agendaItems: AgendaItem[] = []

  constructor (
    private readonly agendaService: AgendaService) {

  }

  ngOnInit (): void {
    this.agendaItems = this.agendaService.GetAgendaItems()
  }
}

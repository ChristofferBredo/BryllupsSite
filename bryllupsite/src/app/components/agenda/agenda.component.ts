import { Component } from '@angular/core';
import { AgendaItem } from '../agenda-item/agenda-item';
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {

  constructor(private agendaService: AgendaService){

  }

  agendaTitle = "Agenda";

  agendaItems = this.agendaService.GetAgendaItems();
  
}

import { Component, Input } from '@angular/core';
import { AgendaItem } from './agenda-item';

@Component({
  selector: 'app-agenda-item',
  templateUrl: './agenda-item.component.html',
  styleUrls: ['./agenda-item.component.css']
})
export class AgendaItemComponent {
  @Input() agendaItem!: AgendaItem

  constructor(){}
  
}

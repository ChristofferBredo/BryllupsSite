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
      description: "Reception"
    },
    {
      time: {hours: 16, minutes: 0},
      description: "Kage ved det festlige højbord"
    },
    {
      time: {hours: 0, minutes: 0},
      description: "Der er mega fest"
    },
    {
      time: {hours: 16, minutes: 0},
      description: "Kage ved det festlige højbord"
    },
    {
      time: {hours: 0, minutes: 0},
      description: "Der er mega fest"
    },
    {
      time: {hours: 16, minutes: 0},
      description: "Kage ved det festlige højbord"
    },
    {
      time: {hours: 0, minutes: 0},
      description: "Der er mega fest"
    }
  ] 

}

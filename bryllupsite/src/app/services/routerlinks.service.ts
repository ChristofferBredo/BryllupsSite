import { Injectable } from '@angular/core';
import { Link } from '../interfaces/link';
import { HomeComponent } from '../home/home.component';
import { AgendaComponent } from '../components/agenda/agenda.component';

@Injectable({
  providedIn: 'root'
})
export class RouterlinksService {

  links: Link[] = [
    { path: "Home", label: "Home", component: HomeComponent }, 
    { path: "Agenda", label: "Tidsplanen", component: AgendaComponent }
  ]

  constructor() { }

  GetRouterLinks() {
    return this.links;
  }
}

import { Injectable } from '@angular/core';
import { Link } from '../interfaces/link';
import { HomeComponent } from '../home/home.component';
import { AgendaComponent } from '../components/agenda/agenda.component';
import { LocationComponent } from '../components/location/location.component';

@Injectable({
  providedIn: 'root'
})
export class RouterlinksService {

  links: Link[] = [
    { path: "Home", label: "Home", component: HomeComponent },
    { path: "Agenda", label: "Tidsplanen", component: AgendaComponent },
    { path: "Location", label: "Lokationen", component: LocationComponent }
  ]

  constructor() { }

  GetRouterLinks() {
    return this.links;
  }
}

import { Injectable } from '@angular/core'
import { Link } from '../interfaces/link'
import { HomeComponent } from '../components/home/home.component'
import { AgendaComponent } from '../components/agenda/agenda.component'
import { BookingInformationComponent } from '../components/booking-information/booking-information.component'
import { PraticalInformationComponent } from '../components/praticalinformation/praticalinformation.component'
import { WishlistComponent } from '../components/wishlist/wishlist.component'

@Injectable({
  providedIn: 'root'
})
export class RouterlinksService {
  links: Link[] = [
    { path: 'Home', label: 'Forside', component: HomeComponent },
    { path: 'Agenda', label: 'Tidsplanen', component: AgendaComponent },
    { path: 'Booking', label: 'Overnatning', component: BookingInformationComponent },
    { path: 'Information', label: 'Praktisk information', component: PraticalInformationComponent },
    { path: 'Wishlist', label: 'Ønsker', component: WishlistComponent }
  ]

  GetRouterLinks (): Link[] {
    return this.links
  }
}

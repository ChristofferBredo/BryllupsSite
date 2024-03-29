import { NgModule } from '@angular/core'
import { RouterModule, type Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import { AgendaComponent } from './components/agenda/agenda.component'
import { BookingInformationComponent } from './components/booking-information/booking-information.component'
import { PraticalInformationComponent } from './components/praticalinformation/praticalinformation.component'
import { WishlistComponent } from './components/wishlist/wishlist.component'

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Agenda', component: AgendaComponent },
  { path: 'Booking', component: BookingInformationComponent },
  { path: 'Information', component: PraticalInformationComponent },
  { path: 'Wishlist', component: WishlistComponent },

  // Redirect empty path to Home
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  // Wild Card Route for 404 request
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

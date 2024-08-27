import { Injectable } from '@angular/core'
import { Link } from '../interfaces/link'
import { HomeComponent } from '../components/home/home.component'
import { BookingInformationComponent } from '../components/booking-information/booking-information.component'
import { PraticalInformationComponent } from '../components/praticalinformation/praticalinformation.component'
import { WishlistComponent } from '../components/wishlist/wishlist.component'
import { PhotosComponent } from '../components/photos/photos.component'

@Injectable({
  providedIn: 'root'
})
export class RouterlinksService {
  links: Link[] = [
    { path: 'Home', label: 'Forside', component: HomeComponent },
    { path: 'Photos', label: 'Fotografier', component: PhotosComponent },
    { path: 'Booking', label: 'Overnatning', component: BookingInformationComponent },
    { path: 'Information', label: 'Praktisk information', component: PraticalInformationComponent },
    { path: 'Wishlist', label: 'Ønsker', component: WishlistComponent }
  ]

  GetRouterLinks (): Link[] {
    return this.links
  }
}

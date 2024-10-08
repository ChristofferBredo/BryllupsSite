import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import { HomeComponent } from './components/home/home.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { TimePipe } from './pipes/time.pipe'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatMenuModule } from '@angular/material/menu'
import { MatTabsModule } from '@angular/material/tabs'
import { CoverComponent } from './components/cover/cover.component'
import { NavtabsComponent } from './components/navtabs/navtabs.component'
import { FooterComponent } from './components/footer/footer.component'
import { BookingInformationComponent } from './components/booking-information/booking-information.component';
import { PraticalInformationComponent } from './components/praticalinformation/praticalinformation.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { OenskeskyenComponent } from './components/wishlist/oenskeskyen/oenskeskyen.component';
import { ResponsiblepersonComponent } from './components/responsibleperson/responsibleperson.component';
import { PhotosComponent } from './components/photos/photos.component'

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HomeComponent,
    TimePipe,
    NavBarComponent,
    CoverComponent,
    NavtabsComponent,
    FooterComponent,
    BookingInformationComponent,
    PraticalInformationComponent,
    WishlistComponent,
    OenskeskyenComponent,
    ResponsiblepersonComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

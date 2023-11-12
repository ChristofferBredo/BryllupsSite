import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgendaComponent } from './components/agenda/agenda.component';
import { AgendaItemComponent } from './components/agenda-item/agenda-item.component';
import { TimePipe } from './pipes/time.pipe';
import { LocationComponent } from './components/location/location.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { CoverComponent } from './components/cover/cover.component';
import { NavtabsComponent } from './components/navtabs/navtabs.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HomeComponent,
    AgendaComponent,
    AgendaItemComponent,
    TimePipe,
    LocationComponent,
    NavBarComponent,
    CoverComponent,
    NavtabsComponent
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgendaComponent } from './components/agenda/agenda.component';
import { AgendaItemComponent } from './components/agenda-item/agenda-item.component';
import { TimePipe } from './pipes/time.pipe';
import { LocationComponent } from './components/location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HomeComponent,
    AgendaComponent,
    AgendaItemComponent,
    TimePipe,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

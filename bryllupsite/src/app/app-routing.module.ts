import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AgendaComponent } from './components/agenda/agenda.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Agenda', component: AgendaComponent },

  // Redirect empty path to Home
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

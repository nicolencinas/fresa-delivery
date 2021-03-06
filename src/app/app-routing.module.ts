import { TicketComponent } from './dashboard/dashboard-views/ticket/ticket.component';
import { SideNavComponent } from './dashboard/side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path:"",
  component:SideNavComponent,
},

{path:"ticket",
  component:TicketComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

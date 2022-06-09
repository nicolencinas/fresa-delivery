import { ProductsService } from './dashboard/dashboard-views/products.service';
import { TicketComponent } from './dashboard/dashboard-views/ticket/ticket.component';
import { MatIconModule } from '@angular/material/icon';
import { FlavoursSelectorComponent } from './dashboard/shared/components/flavours-selector/flavours-selector.component';
import { ClientHistorialComponent } from './dashboard/shared/components/client-historial/client-historial.component';
import { ClientsAbmComponent } from './dashboard/shared/components/clients-abm/clients-abm.component';
import { ConfirmModule } from './dashboard/shared/components/confirm/confirm.module';
import { ProductsComponent } from './dashboard/dashboard-views/products/products.component';
import { ItemSelectorComponent } from './dashboard/side-nav/item-selector/item-selector.component';
import { SideNavComponent } from './dashboard/side-nav/side-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import localeEsAr from '@angular/common/locales/es-AR';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';


registerLocaleData(localeEsAr, 'es-AR');


@NgModule({
  declarations: [	
    AppComponent,
    SideNavComponent,
    DashboardComponent,
    ItemSelectorComponent,
    ProductsComponent,
    ClientsAbmComponent,
    ClientHistorialComponent,
    FlavoursSelectorComponent,
    TicketComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    ConfirmModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatProgressSpinnerModule, 
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "es-AR" },
    ProductsService   //replace "en-US" with your locale
    //otherProviders...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

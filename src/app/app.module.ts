import { ClientsAbmComponent } from './dashboard/shared/clients-abm/clients-abm.component';
import { ConfirmModule } from './dashboard/shared/confirm/confirm.module';
import { ProductsComponent } from './dashboard/dashboard-views/products/products.component';
import { ItemSelectorComponent } from './dashboard/side-nav/item-selector/item-selector.component';
import { SideNavComponent } from './dashboard/side-nav/side-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [	
    AppComponent,
    SideNavComponent,
    DashboardComponent,
    ItemSelectorComponent,
    ProductsComponent,
    ClientsAbmComponent
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
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

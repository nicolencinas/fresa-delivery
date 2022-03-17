import { ItemSelectorComponent } from './item-selector/item-selector.component';
import { SideNavComponent } from './side-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavRoutingModule } from './side-nav-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    SideNavRoutingModule,
    FormsModule,
  ],
  declarations: [SideNavComponent,ItemSelectorComponent]
})
export class SideNavModule { }

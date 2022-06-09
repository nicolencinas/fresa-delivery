import { ProductsService } from './../products.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from '../../shared/models/client';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  public products:any;
  public client:any;

  public pay:number = 0;
  public total:number = 0;
  public turned:number = 0;


  constructor(private service:ProductsService
  ) {
    this.pay = this.products
   }
  
  ngOnInit() {
    this.products = this.service.getDeliveryProducts()
    this.calculatePrices()
    console.log(this.service.getDeliveryProducts())
  }

  calculatePrices(){

 
   this.products.products.forEach(element => {
     console.log(element.price)
     this.total += element.price
   });
   this.turned = this.pay - this.total;
  }

  ki(){
    console.log(this.service.getDeliveryProducts())
  }

  public onPrint() {
    window.print()
  }
}

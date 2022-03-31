import { FlavoursSelectorComponent } from './../../shared/components/flavours-selector/flavours-selector.component';
import { ConfirmComponent } from '../../shared/components/confirm/confirm.component';
import { Observable } from 'rxjs';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products$:Observable<any>
  public showProducts:any;

  additionals = ["cucu-1",
  "tacitas",
  "tacitas-2",
  "tacitas-reg",
  "lista",
  "iman",
  "cucharitas",
  "cucu-reg"]

  constructor(private productsService:ProductsService,private dialog:MatDialog) { }

  
  ngOnInit() {
    this.products$ = this.productsService.getDeliveryProducts();
    this.products$.subscribe(products =>{this.showProducts=products,console.log(products)})
  }

  cancelProduct(type:string,index:number){
    this.productsService.removeProduct(type,index)
  }

  openFlavourSelector(index:number) {
    const dialogRef = this.dialog.open(FlavoursSelectorComponent, {
      width:"80vw",
      data:index
    }); 

    dialogRef.afterClosed().subscribe(
      res => {
        console.log(res)
        if (res.status)
          this.productsService.setFlavours(res.index,res.flavours)
      }
    )
  }

 

}

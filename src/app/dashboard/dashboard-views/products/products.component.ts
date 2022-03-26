import { ConfirmComponent } from './../../shared/confirm/confirm.component';
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

  public products$:Observable<Product[]>
  public showProducts:Product[];

  constructor(private productsService:ProductsService,private dialog:MatDialog) { }

  ngOnInit() {
    this.products$ = this.productsService.getDeliveryProducts();
    this.products$.subscribe(products =>{this.showProducts=products,console.log(products)})
  }

  cancelProduct(index){
    this.productsService.removeProduct(index);

    // const dialogRef = this.dialog.open(ConfirmComponent, {
    //   width: '600px',
    //   data:{message:"¿Esta seguro que desea eliminar el producto?",
    //   buttons:[{
    //     label:"Cancelar",
    //     buttonClass:"cancel",
    //     action:'cancel'
    //   },
    //   {
    //     label:"Aceptar",
    //     buttonClass:"accept",
    //     action:'accept'
    //   },

    // ]
    // }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result){
    //     console.log('Se elmino con exito')
    //     this.productsService.removeProduct(index);

    //   } else {
    //     console.log('NO se elimino nada')

    //   }

    // });
  
  }

  addFlavour(index:number,flavour:string){
    this.productsService.addFlavour(index,flavour)
  }

}

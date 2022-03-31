import { ProductsService } from './../../dashboard-views/products.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.scss']
})
export class ItemSelectorComponent implements OnInit {

  public products$:Observable<Product[]>

  constructor(private products:ProductsService) { }

  ngOnInit() 
  {
    this.products$ = this.products.getAvailableProducts();
    this.products$.subscribe(console.log)
  }

  addProduct(product:Product){
    const prd = Object.assign({},product) 
    prd.flavours = [];
    this.products.addProduct(prd)
  } 

}

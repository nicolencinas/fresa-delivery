import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[];

  constructor(private http:HttpClient) {
    this.products = []
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  addFlavour(index:number,flavour:string){
    this.products[index].flavours.push(flavour)
  }

  getAvailableProducts():Observable<Product[]> {

    return this.http.get<Product[]>('http://localhost:3001/products');
    }

  getDeliveryProducts(){
    return of(this.products)
  }
  removeProduct(index:number){
    this.products.splice(index,1)
  }
}


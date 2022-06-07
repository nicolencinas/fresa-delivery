import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Flavour } from '../shared/models/flavour';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[];

  delivery = {
    products:[],
    additionals: {
      "cucu-1":0,
      "tacitas":0,
      "tacitas-2":0,
      "tacitas-reg":0,
      "lista":0,
      "iman":0,
      "cucharitas":0,
      "cucu-reg":0
    },
    goblets:[],
    cakes: []
  
  }

  constructor(private http:HttpClient) {
    this.products = []
  }

  addProduct(product: Product) {
    if(product.type !== 'ADDITIONAL')
    this.delivery[product.type.toLowerCase()+'s'].push(product)
    else
      this.delivery.additionals[product.cod] +=1;
  }

  addFlavour(index:number,flavour:string){
    this.products[index].flavours.push(flavour)
  }

  setFlavours(index:number,flavours:Flavour[]){
    this.delivery.products[index].flavours = flavours

  }

  getAvailableProducts():Observable<Product[]> {

    return this.http.get<Product[]>('http://localhost:3001/products');
    }

  getDeliveryProducts() {
    return of(this.delivery)
  }
  removeProduct(type:string,index:number){
    this.delivery[type.toLowerCase()+'s'].splice(index,1)
  }
}


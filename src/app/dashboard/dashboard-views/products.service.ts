import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[];

  constructor() {
    this.products = []
  }

  addProduct(product: Product) {
    this.products.push(product);
    console.log(this.products)
  }

  addFlavour(index:number,flavour:string){
    this.products[index].flavours.push(flavour)
    console.log(index,flavour,this.products[index])
  }

  getAvailableProducts() {
    const products: Product[] = 
    [
      { description: 'Un Kilo',icon:'kilo', price: 800,flavours:[] },
      { description:'Medio Kilo',icon:'medio',price:450,flavours:[]},
      { description:'Cuarto Kilo',icon:'cuarto',price:250,flavours:[]},
      { description:"Copa Helada",icon:'copa-helada',price:600},
      { description:"Tacitas por unidad",icon:'tacitas',price:10,grouped:true}
    ];

    return of(products)
  }

  getDeliveryProducts(){
    return of(this.products)
  }
  removeProduct(index:number){
    console.log(index)
    this.products.splice(index,1)
  }
}

export class Product {
  description: string;
  price: number;
  icon?:string;
  flavours?: string[];
  grouped?:boolean;
}

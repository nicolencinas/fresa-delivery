export class Product {
    cod:string;
    detail:string;
    price:number;
    status:boolean;
    flavours?:any[]
  order: number;
  type:"PRODUCT" | "ADDITIONAL" | "CAKE" | "GOBLET"
}

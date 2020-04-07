export class Product {
  id:number;
  name: string;
  price:number;
  imageUrl: string;


  constructor(id,name,price,imageUrl){
    this.id=id;
    this.name=name;
    this.price=price;
    this.imageUrl= imageUrl;

  }
}

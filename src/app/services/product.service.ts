import { Injectable } from '@angular/core';
import { Product } from '../modals/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] =[
    new Product(1,'Jaal Sea Green Saree',120 ,'../../assets/images/product-img1.PNG'),
    new Product(2,'Butta Green Saree', 139 ,'../../assets/images/product-img2.PNG'),
    new Product(3,'Jaal And Tissue Saree', 99 ,'../../assets/images/product-img3.PNG'),
    new Product(4,'Kanchipuram Silk Checks And Butta Yellow Saree', 219 ,'../../assets/images/product-img4.PNG')
  ];

  constructor() { }

  getProducts(): Product[]{
    return this.products;
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../modals/product';

@Component({
  selector: 'app-product-women',
  templateUrl: './product-women.component.html',
  styleUrls: ['./product-women.component.css']
})
export class ProductWomenComponent implements OnInit {
  productwomen: Product[]=[];

  constructor(private productService: ProductService) {

   }

  ngOnInit(): void {
    this.productwomen = this.productService.getProducts();

  }

}

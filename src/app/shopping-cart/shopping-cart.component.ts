import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from '../modals/product';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems=[
    //{id:1, productId:1, productName:'test1', quantity:2, price: 122 },
    //{id:2, productId:2, productName:'test2', quantity:1, price: 10 },
    //{id:3, productId:3, productName:'test3', quantity:3, price: 20 },
    //{id:4, productId:4, productName:'test4', quantity:4, price: 40 },
    

  ];

  cartTotal=0;

  constructor(private msg: MessengerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((product: Product)=> {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product : Product){
    let productExists= false ;
    for(let i in this.cartItems){
      if(this.cartItems[i].productId===product.id){
        this.cartItems[i].quantity++ ;
        productExists = true ;
        break;
      }
    }

    if(!productExists){
      this.cartItems.push({
        productId:product.id,
        productName: product.name,
        quantity:1,
        price:product.price
      })
    }
    
    this.cartTotal=0;
    this.cartItems.forEach(item=> {
      this.cartTotal+=(item.quantity * item.price)
    });
  }


}






    //let productExists = false;

   /* for(let i of this.cartItems){
      if(this.cartItems[i].id===product.id){
        this.cartItems[i].quantity++ ;
        productExists = true ;
        break;
      }
    }

    if(!productExists){
      this.cartItems.push({
        productId:product.id,
        productName: product.name,
        quantity:1,
        price:product.price
      })
    }
    
    this.cartTotal=0;
    this.cartItems.forEach(item=> {
      this.cartTotal+=(item.quantity * item.price)
    }); */
      

  



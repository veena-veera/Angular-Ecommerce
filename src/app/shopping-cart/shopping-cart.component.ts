import { Component, OnInit, Input } from "@angular/core";
import { MessengerService } from "src/app/services/messenger.service";
import { Product } from "../modals/product";
import { identifierModuleUrl } from "@angular/compiler";
@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"],
})
export class ShoppingCartComponent implements OnInit {
  cartItems = [
    //{id:1, productId:1, productName:'test1', quantity:2, price: 122 },
    //{id:2, productId:2, productName:'test2', quantity:1, price: 10 },
    //{id:3, productId:3, productName:'test3', quantity:3, price: 20 },
    //{id:4, productId:4, productName:'test4', quantity:4, price: 40 },
  ];

  cartTotal = 0;
  //@Input() cartItems: [];
  constructor(private msg: MessengerService) {}

  ngOnInit() {
    if (localStorage.getItem("cartProducts")) {
      var retrievedCartObject = localStorage.getItem("cartProducts");
      var retrievedCartTotal = localStorage.getItem("cartTotal");
      this.cartTotal = JSON.parse(retrievedCartTotal);
      this.cartItems = JSON.parse(retrievedCartObject);
    }
    this.msg.getMsg().subscribe((product: Product) => {
      // var retrievedObject = localStorage.getItem("productToBeAdded");
      this.addProductToCart(product);
    });
  }

  addProductToCart(product: Product) {
    let productExists = false;
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === product.id) {
        this.cartItems[i].quantity++;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        id: product.id,
        name: product.name,
        quantity: 1,
        price: product.price,
      });
    }

    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += item.quantity * item.price;
    });

    localStorage.setItem("cartProducts", JSON.stringify(this.cartItems));
    localStorage.setItem("cartTotal", JSON.stringify(this.cartTotal));
  }

  removeProductFromCart(product: Product) {
    console.log(product);
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === product.id) {
        this.cartItems[i].quantity--;
        this.cartTotal -= product.price;
        if (this.cartItems[i].quantity == 0) {
          this.cartItems.splice(parseInt(i), 1);
        }
        break;
      }
    }
    localStorage.setItem("cartProducts", JSON.stringify(this.cartItems));
    localStorage.setItem("cartTotal", JSON.stringify(this.cartTotal));
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

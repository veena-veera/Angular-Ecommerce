import { Product } from "./product";
export class Order {
  username: string;
  useremail: string;
  price: number;
  products: Product[];

  constructor(username, useremail, price, products) {
    this.username = username;
    this.useremail = useremail;
    this.price = price;
    this.products = products;
  }
}

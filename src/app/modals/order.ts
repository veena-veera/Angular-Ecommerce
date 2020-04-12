import { Product } from "./product";
export class Order {
  userfname: string;
  userlname: string;
  useremail: string;
  userphone: number;
  useraddress: string;
  usercity: string;
  userstate:string;
  userzip: number;
  price: number;
  products: Product[];

  constructor(userfname,userlname, useremail,userphone,useraddress,usercity,userstate,userzip, price, products) {
    this.userfname = userfname;
    this.userlname = userlname;
    this.useremail = useremail;
    this.userphone = userphone;
    this.useraddress = useraddress;
    this.usercity = usercity;
    this.userstate = userstate;
    this.userzip = userzip;
    this.price = price;
    this.products = products;
  }
}

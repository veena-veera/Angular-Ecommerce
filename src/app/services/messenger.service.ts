import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MessengerService {
  subject = new Subject();

  constructor() {}

  sendMsg(product) {
    console.log(product);
    localStorage.setItem("productToBeAdded", JSON.stringify(product));
    this.subject.next(product); //triggering an event
  }
  getMsg() {
    return this.subject.asObservable();
  }
}

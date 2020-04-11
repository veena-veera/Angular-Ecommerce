import { Component, OnInit, NgZone } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Order } from "./../../modals/order";
import { Router } from "@angular/router";
import { ApiService } from "./../../services/api.service";
@Component({
  selector: "app-checkout-guest",
  templateUrl: "./checkout-guest.component.html",
  styleUrls: ["./checkout-guest.component.css"],
})
export class CheckoutGuestComponent implements OnInit {
  uploadForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {}
  handleCheckOut() {
    let orderDetails = new Order(
      this.uploadForm.get("lname").value,
      this.uploadForm.get("email").value,
      localStorage.getItem("cartTotal"),
      JSON.parse(localStorage.getItem("cartProducts"))
    );
    let data = {
      orderDetails,
    };
    this.apiService.createOrder(data).subscribe(
      (res) => {
        console.log("Order successfully inserted in db!", res.OrderId);
        localStorage.removeItem("cartProducts");
        localStorage.removeItem("cartTotal");
        this.ngZone.run(() => this.router.navigateByUrl("/order-success"));
      },
      (error) => {
        console.log(error);
      }
    );

    console.log("order ", orderDetails);
  }

  populateValue(e) {
    console.log("event ::: ", e);

    this.uploadForm.get(e.srcElement.name).setValue(e.srcElement.value);
  }
  ngOnInit(): void {
    this.uploadForm = new FormGroup({
      lname: new FormControl(),
      email: new FormControl(),
    });
  }
}

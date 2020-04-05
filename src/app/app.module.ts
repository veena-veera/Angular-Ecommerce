import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {  RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductWomenComponent } from './product-women/product-women.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { GuestCheckoutComponent } from './guest-checkout/guest-checkout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductWomenComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    GuestCheckoutComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'product-women', component: ProductWomenComponent},
      {path:'shopping-cart', component: ShoppingCartComponent},
      {path:'checkout', component: CheckoutComponent },
      {path:'order-success', component: OrderSuccessComponent},
      {path:'login', component: LoginComponent},
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

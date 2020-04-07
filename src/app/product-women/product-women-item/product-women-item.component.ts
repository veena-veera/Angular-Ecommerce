import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/modals/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-women-item',
  templateUrl: './product-women-item.component.html',
  styleUrls: ['./product-women-item.component.css']
})
export class ProductWomenItemComponent implements OnInit {
  @Input() productitem: Product ;

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

  handleAddtoCart(){
    this.msg.sendMsg(this.productitem) ;
  }

}

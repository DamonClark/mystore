import { Component, Input, OnInit, Output} from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})

export class ShoppingCartListComponent implements OnInit {


  @Input() product: any = [];
  totalProductPrice: number = 0;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.totalProductPrice = this.product.price * this.product.quantity
  }

}

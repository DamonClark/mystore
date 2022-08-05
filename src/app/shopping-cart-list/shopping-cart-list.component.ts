import { Component, Input, OnInit, Output} from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})

export class ShoppingCartListComponent implements OnInit {


  @Input() shoppingList: string[] = [];
  @Input() product: any = [];
  totalProductPrice: number = 1;
  totalPrice: number = 1;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.totalProductPrice = this.product.price * this.product.quantity
  }

  totalCost() {
    if (this.shoppingList.length < 2) {
      this.totalProductPrice = this.product.price * this.product.quantity
      return this.totalProductPrice
    } else {  
      this.totalProductPrice = this.product.price * this.product.quantity
      return this.totalProductPrice + this.totalProductPrice
    }
  }
}

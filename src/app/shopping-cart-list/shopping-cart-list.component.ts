import { Component, Input, OnInit, Output} from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})

export class ShoppingCartListComponent implements OnInit {


  @Input() shoppingList: any = [];
  @Input() product: any = [];
  totalProductPrice: number = 0;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.totalProductPrice = this.product.price * this.product.quantity
    this.totalCost();
  }

  totalCost() {
    if (this.shoppingList != null)
      if (this.shoppingList.length < 2) {
        this.totalProductPrice = this.product.price * this.product.quantity
        return this.totalProductPrice
      } else {
        console.log(this.shoppingList.length);
        let totalPrice: number = 0
        for(const p of this.shoppingList) {
        totalPrice = totalPrice + (p.price * p.quantity)
        }
        return totalPrice;
      }
    else {
      return this.totalProductPrice;
    } 
  }
}

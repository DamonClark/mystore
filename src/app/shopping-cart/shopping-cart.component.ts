import { Component, Input, OnInit, Output } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

  shoppingList: any = [];
  product: any = [];
  price: any = "";


  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.shoppingList = this.httpService.getShoppingCartList();
    this.totalCost();
  }

  totalCost() {
    if (this.shoppingList != 0) {
        console.log(this.shoppingList.length);
        let totalPrice: number = 0
        for(const p of this.shoppingList) {
        totalPrice = totalPrice + (p.price * p.quantity)
        }
        return totalPrice;
      }
    else {
      console.log('test')
      return "";
    } 
  }
}

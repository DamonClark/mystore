import { Component, Input, OnInit, Output } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

  shoppingList: any[] = [];
  product: any[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.shoppingList = this.httpService.getShoppingCartList();
    console.log(this.shoppingList)
  }

}

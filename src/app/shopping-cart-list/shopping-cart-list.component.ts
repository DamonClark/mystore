import { Component, Input, OnInit, Output } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})

export class ShoppingCartListComponent implements OnInit {

  shoppingList: any[] = [];
  @Input() product: any = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

}

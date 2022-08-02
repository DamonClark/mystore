import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { HttpService } from '../http.service';
import { Product } from '../models/Product.model'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList?: Product[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getProducts().subscribe(data => {
      this.productList = data;
      console.log(this.productList)
    });
  } 

  addProductToCart(product: object): void {
    this.httpService.addToShoppingCart(product);
  }
}

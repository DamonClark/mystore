import { Injectable } from '@angular/core';
import { Product } from './models/Product.model'
import { map, Observable  } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  id: number | undefined; 
  shoppingList: any[] = []
  static getProductDetails: any;
  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("../assets/data.json")
  }

  getProductDetails(id: number | string) {
    return this.getProducts().pipe(
      map((products: Product[]) => products.find(product => product.id === +id)!)
    );
  }

  getShoppingCartList() {
    return this.shoppingList;
  }
  
  addToShoppingCart(product: any) {
    this.shoppingList.push(product);
    return this.shoppingList;
  }
}

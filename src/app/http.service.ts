import { Injectable } from '@angular/core';
import { Product } from './models/Product.model'
import { Observable  } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("../assets/data.json")
  }
}

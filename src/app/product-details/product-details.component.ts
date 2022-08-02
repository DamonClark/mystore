import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  @Input() product: any = [];
  mybool!: boolean;

  constructor(private httpService: HttpService,
              private route: ActivatedRoute,
              private location: Location,
              public router: Router,
              ) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') != null) { 
      this.getProduct()
    }
  };

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.httpService.getProductDetails(id)
      .subscribe(data => this.product = data);
  }

  goBack(): void {
    this.location.back();
  }

  addProductToCart(product: object): void {
    this.httpService.addToShoppingCart(product);
  }
}

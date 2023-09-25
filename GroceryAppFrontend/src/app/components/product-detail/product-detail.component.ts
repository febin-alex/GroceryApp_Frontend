import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product:any;

  constructor(private dataService:DataService){

    this.dataService.getProductsById(1).subscribe((response:any)=>{
      this.product=response;
      
    })
  }
  

}

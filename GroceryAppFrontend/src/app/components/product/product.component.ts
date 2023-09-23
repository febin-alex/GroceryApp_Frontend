import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products:IProduct[]=[];

  constructor(private dataService:DataService){

    this.dataService.getProductsByCatId(101,1).subscribe((response:any)=>{
      this.products=response;
    })
  }

}

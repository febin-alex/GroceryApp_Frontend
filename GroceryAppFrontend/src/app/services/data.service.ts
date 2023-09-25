import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/category.model';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCategories():Observable<ICategory>{
    return this.http.get<ICategory>('http://localhost:5254/api/Category');
  }

  getProductsByCatIdAndSubCatId(catId:any,subcatId:any):Observable<IProduct>{
    return this.http.get<IProduct>('http://localhost:5254/api/Product/'+catId+'/'+subcatId);
  }
  getProductsById(Id:any):Observable<any>{
    return this.http.get<any>('http://localhost:5254/api/Product/'+Id);
  }


  getAllProducts():Observable<any>{
    return this.http.get<any>('http://localhost:5254/api/Product');
  }
  getSubCategoryByCatId(catId:any):Observable<any>{
    return this.http.get<any>('http://localhost:5254/api/Subcategory/'+catId)
  }
}

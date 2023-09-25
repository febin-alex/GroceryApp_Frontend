import { Component } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { ICategory } from 'src/app/models/category.model';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  categories:ICategory[]=[];

  


  constructor(private dataService:DataService){
    

    this.dataService.getCategories().subscribe((response:any)=>{
      this.categories=response;
    })
  }


  
 
}









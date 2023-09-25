import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/users.model';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  
  constructor(private http:HttpClient) { }

  register(data:User):Observable<any>{
    return this.http.post<any>("http://localhost:5254/api/User/register",data);
  }

  login(data:any):Observable<any>{
     console.log("Reached fun");
     console.log(data);
    return this.http.post<any>("http://localhost:5254/api/User/login",{Email:data.Email,Password:data.Password});
  }

}

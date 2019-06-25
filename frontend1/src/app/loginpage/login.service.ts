import { Injectable } from '@angular/core';
import { Observable,Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserStart } from '../models/UserStart';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url:string="http://localhost:3333/test/login";
  private respond:string;

  constructor(private http:HttpClient) { 


  }
  login(loginForm:UserStart):Observable<string>{
    console.log("msk");
    console.log(loginForm);
    return this.http.post<string>(this.url,loginForm);

  }
}

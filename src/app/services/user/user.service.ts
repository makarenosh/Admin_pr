import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { URL_SERVICES } from 'src/app/config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public token: String;

  constructor(
    public _http: HttpClient,
    public router: Router
  ) {
    this.loadStorage();
   }

  createUser(user: User): Observable < any > {
    let params = JSON.stringify(user);
    let url = URL_SERVICES + '/user';    
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(url, params, { headers: headers });
  }

  googleLogin(googleToken: String){
    let url = URL_SERVICES + '/login/google';        
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(url, {token: googleToken}, { headers: headers });
  }

  login(user: User, recordar: Boolean){
    let params = JSON.stringify(user);    
    let url = URL_SERVICES + '/login';    
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(url, params, { headers: headers });
  }

  isLogged(){
    return (this.token.length >5 ) ? true: false;
  }

  loadStorage(){
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      // this.user = JSON.parse(localStorage.getItem('user'));
    }else{
      this.token = '';
    }
  }

  setToken(token: string){
    this.token = token;
  }

  logout(){    
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}

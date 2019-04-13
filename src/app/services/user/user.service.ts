import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { URL_SERVICES } from 'src/app/config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import swal from 'sweetalert';
import { UploadFileService } from '../upload-file.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public token: string;
  public user: User;

  constructor(
    public _http: HttpClient,
    public router: Router,
    public uploadService: UploadFileService
  ) {
    this.loadStorage();
   }

  createUser(user: User) {
    let params = JSON.stringify(user);
    let url = URL_SERVICES + '/user';    
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(url, params, { headers: headers })
    .map((res: any)=>{
      swal("Usuario registrado", " " + user.email, "success");
      return res.user;
    });
  }

  updateUser(user: User){
    let params = JSON.stringify(user);
    let url = URL_SERVICES + '/user/' + user._id;  
    url += '?token=' + this.token;  
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(url, user, { headers: headers })
    .map((res: any)=>{
        let user: User = res.user;
        this.saveStorage(user._id, this.token, user);
        swal('Usuario actualizado', user.name, 'success');
      return res.user;
    });
  }

  googleLogin(googleToken: String){
    let url = URL_SERVICES + '/login/google';        
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(url, {token: googleToken}, { headers: headers })
    .map((res: any)=>{
      this.saveStorage(res.id, res.token, res.user);
      return true;
    });       
  }

  login(user: User, recordar: Boolean){
    if(recordar){
      localStorage.setItem('email', user.email);
    }else{
      localStorage.removeItem('email');
    }
    let params = JSON.stringify(user);    
    let url = URL_SERVICES + '/login';    
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.user = user;    
    return this._http.post(url, params, { headers: headers })
    .map((res: any)=>{
      this.saveStorage(res.id, res.token, res.user);
      return true;
    });
  }

  isLogged(){
    return (this.token.length >5 ) ? true: false;
  }

  loadStorage(){
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('user'));
    }else{
      this.token = '';
      this.user = null;      
    }
  }

  setToken(token: string, user: User){
    this.token = token;
  }

  logout(){    
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  saveStorage(id: string, token: string, user: User){
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
    this.token = token;    
  }

  changeImg(file: File, id: string){
    this.uploadService.uploadFile(file, 'users', id).then(
      (response: any)=>{
        console.log(response);
        this.user.image = response.user.image;
        swal('Imagen de usuario actualizada correctamente', this.user.name, 'success');
        this.saveStorage(id, this.token, this.user);

      }
    ).catch(
      error=>{
        console.log(error);
      }
    )
  }

}

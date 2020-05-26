import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginService, registeService } from './constants/GMConstant'
import { User } from './models/user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public login(user: User):Observable<boolean>{
    return this.http.post<boolean>(loginService, user);
  }

  public register(user: User):Observable<boolean>{
    return this.http.post<boolean>(registeService, user);
  }
}

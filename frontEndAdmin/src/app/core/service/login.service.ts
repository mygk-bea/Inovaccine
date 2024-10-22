import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interfaces/login';
import { Autenticacao } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = "http://localhost:8000/api";
  constructor(private http : HttpClient) { }

  autenticarLogin(login: Login){
    this.http.post<Autenticacao>(`${ this.url }/login`, login)
    .subscribe(response => {
      console.log(response)
    })
  }
}

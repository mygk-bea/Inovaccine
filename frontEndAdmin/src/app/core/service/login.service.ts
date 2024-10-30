import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interfaces/login';
import { Autenticacao } from '../interfaces/login';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }

  autenticarLogin(login: Login) {
    return this.http.post<Autenticacao>(`${this.url}/login`, login)
      .pipe(
        catchError(err => {
          console.error('Erro ao autenticar', err);
          return throwError(err);
        })
      )
      .subscribe(response => {
        console.log(response); // Exibe a resposta completa
        if (response.validado) {
          console.log('ID do usuário logado:', response.id); 
         
        } else {
          console.log('Login não validado:', response.mensagem);
        }
      });
  }
}

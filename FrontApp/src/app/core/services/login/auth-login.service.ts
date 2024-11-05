import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';
import { Login } from '../../interfaces/login'; // Certifique-se de que essa interface está correta

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  private url: string = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }

  autenticarLogin(login: Login): Observable<any> {
    return this.http.post<any>(`${this.url}/login`, {
      email: login.email,
      senha: login.senha 
    }).pipe(
      tap(response => {
        if (response.validado) {
          sessionStorage.setItem('userId', response.id);
          sessionStorage.setItem('userType', response.tipo);
          sessionStorage.setItem('userName', response.nome);
        }
      }),
      catchError(error => {
        // Aqui você pode tratar o erro, por exemplo, registrando no console ou mostrando uma mensagem ao usuário
        console.error('Erro ao autenticar:', error);
        return throwError(() => new Error('Erro na autenticação. Tente novamente.'));
      })
    );
  }

  logout(): Observable<void> {
    sessionStorage.clear();
    return of(undefined); // Retorna um Observable vazio
  }

  getUserId() : any{
    const id = sessionStorage.getItem('userId');
    return id;
  }
}

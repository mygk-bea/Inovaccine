import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }

  login(email: string, senha: string): Observable<any> {
    return this.http.post<any>(`${this.url}/login`, { email, senha }).pipe(
      tap(response => {
        if (response.validado) {
          sessionStorage.setItem('userId', response.id);
          sessionStorage.setItem('userType', response.tipo);
          sessionStorage.setItem('userName', response.nome);
        }
      })
    );
  }

  logout(): void {
    sessionStorage.clear();
  }

  getUserData(): { id: string, type: string, name: string } | null {
    const id = sessionStorage.getItem('userId');
    const type = sessionStorage.getItem('userType');
    const name = sessionStorage.getItem('userName');

    return id && type && name ? { id, type, name } : null;
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('userId');
  }
}

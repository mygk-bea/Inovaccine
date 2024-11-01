import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Isso faz com que o Angular injete o serviço automaticamente no root
})
export class ViaCepService {
  private apiUrl = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) {}

  buscarCep(cep: string): Observable<any> {
    const url = `${this.apiUrl}/${cep}/json`;
    return this.http.get<any>(url);
  }
}

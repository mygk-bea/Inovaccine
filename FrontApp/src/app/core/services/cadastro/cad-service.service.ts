import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadService {
  private url: string = 'http://localhost:8000/api'; // URL da sua API

  constructor(private http: HttpClient) { }

  // Método para cadastrar um novo usuário
  cadastrarUsuario(dados: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.url}/cadPaciente`, JSON.stringify(dados), { headers });
  }

  // Método para obter todos os usuários
  obterUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/usuarios`);
  }

  // Método para atualizar um usuário existente
  atualizarUsuario(id: number, dados: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.url}/usuarios/${id}`, JSON.stringify(dados), { headers });
  }

  // Método para excluir um usuário
  excluirUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.url}/usuarios/${id}`);
  }
}

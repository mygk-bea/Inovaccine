import { Injectable } from '@angular/core';
import { Agendamento } from '../interfaces/agendamento';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  private url: string = "http://localhost:8000/api";  // URL da sua API

  constructor(private http: HttpClient) {}

  cadastrarAgendamento(agendamento: Agendamento): Observable<Agendamento> {
    console.log(agendamento);
    // Retorna o Observable, permitindo que o componente faça o subscribe
    return this.http.post<Agendamento>(`${this.url}/cadAgendamento`, agendamento);
  }

  listarAgendamento(userId : number): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(`${this.url}/listagemAgendamento/${userId}`);
  }
}

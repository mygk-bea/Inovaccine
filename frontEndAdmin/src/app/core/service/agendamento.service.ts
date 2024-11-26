import { HttpClient } from '@angular/common/http';
import { Agendamento } from '../interfaces/agendamento';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  private url: string = "http://localhost:8000/api";
  constructor(private http: HttpClient) { }

  cadastrarAgendamento(agendamento: Agendamento): Observable<any> {
    return this.http.post<any>(`${this.url}/cadAgendamento`, agendamento);
  }

  listarAgendamento(clinicId : number): Observable<any> {
    return this.http.get<any>(`${this.url}/listagemAgendamentoClinica/${clinicId}`);
  }
}

import { Injectable } from '@angular/core';
import { Agendamento } from '../interfaces/agendamento';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  private url: string = "http://localhost:8000/api";
  constructor(private http : HttpClient) { }

  cadastrarAgendamento (agendamento: Agendamento){
    console.log(agendamento);
    this.http.post(`${ this.url }/cadAgendamento`, agendamento)
    .subscribe(response => {
      console.log(response)
    })
  }

  listarAgendamento(): Observable<any>{
    return this.http.get<any>(`${ this.url }/listagemAgendamento`)
  }
}

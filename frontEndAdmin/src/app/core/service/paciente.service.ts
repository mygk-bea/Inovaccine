import { Injectable } from '@angular/core';
import { Paciente } from '../interfaces/paciente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private url: string = "http://localhost:8000/api";
  constructor(private http : HttpClient) { }

  cadastrarPaciente (paciente: Paciente){
    console.log(paciente);
    this.http.post(`${ this.url }/cadPaciente`, paciente)
    .subscribe(response => {
      console.log(response)
    })
  }
  
  pesquisarPaciente(value: string): Observable<any>{
    return this.http.get<any>(`${ this.url }/pesquisaPaciente?search=${value}`)
  }

  listarPaciente (): Observable<any>{
    return this.http.get<any>(`${ this.url }/listagemPaciente`)
  }

}
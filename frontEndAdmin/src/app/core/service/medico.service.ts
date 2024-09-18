import { Injectable } from '@angular/core';
import { Medico } from '../interfaces/medico';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private url: string = "http://localhost:8000/api";
  constructor(private http : HttpClient) { }

  cadastrarMedico (medico: Medico){
    console.log(medico);
    this.http.post(`${ this.url }/cadMedico`, medico)
    .subscribe(response => {
      console.log(response)
    })
  }

  pesquisarMedico(value: string): Observable<any>{
    return this.http.get<any>(`${ this.url }/pesquisaMedico?search=${value}`)
  }
}


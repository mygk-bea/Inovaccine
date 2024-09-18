import { Injectable } from '@angular/core';
import { Clinica } from '../interfaces/clinica';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {
  private url: string = "http://localhost:8000/api";
  constructor(private http : HttpClient) { }

  cadastrarClinica (clinica: Clinica){
    console.log(clinica);
    this.http.post(`${ this.url }/cadClinica`, clinica)
    .subscribe(response => {
      console.log(response)
    })
  }

  listarClinica (): Observable<any>{
    return this.http.get<any>(`${ this.url }/listagemClinica`)
  }
}

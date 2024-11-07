import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clinica } from '../../interfaces/clinica';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {
  private url: string = "http://localhost:8000/api";
  constructor(private http : HttpClient) { }


  listarClinica (): Observable<Clinica[]>{
    return this.http.get<any>(`${ this.url }/listagemClinica`)
  }
}

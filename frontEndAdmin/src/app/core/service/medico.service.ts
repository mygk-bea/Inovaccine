import { Injectable } from '@angular/core';
import { Medico } from '../interfaces/medico';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {
  private url: string = "http://localhost:4200/api";
  constructor(private http : HttpClient) { }
  

  cadastrarMedico (medico: Medico){
    console.log(medico);
    this.http.post(`${ this.url }/cadMedico`, medico);
  }
}

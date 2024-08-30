import { Injectable } from '@angular/core';
import { Clinica } from '../interfaces/clinica';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {
  private url: string = "http://localhost:4200";
  constructor(private http : HttpClient) { }
  

cadastrarClinica (clinica: Clinica){
  this.http.post(`${ this.url }/cadastro-clinica`, clinica);
}

}

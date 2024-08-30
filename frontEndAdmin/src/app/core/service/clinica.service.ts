import { Injectable } from '@angular/core';
import { Clinica } from '../interfaces/clinica';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {
  private url: string = "http://localhost:4200/api";
  constructor(private http : HttpClient) { }
  

cadastrarClinica (clinica: Clinica){
  console.log(clinica);
  this.http.post(`${ this.url }/cadClinica`, clinica);
}

}

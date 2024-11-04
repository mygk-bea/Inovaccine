import { Injectable } from '@angular/core';
import { Campanha } from '../interfaces/campanha';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampanhaService {
  private url: string = "http://localhost:8000/api";
  constructor(private http : HttpClient) { }

  cadastrarCampanha (campanha: Campanha){
    console.log(campanha);
    this.http.post(`${ this.url }/cadCampanha`, campanha)
    .subscribe(response => {
      console.log(response)
    })
  }

  pesquisarCampanha(value: string): Observable<any>{
    return this.http.get<any>(`${ this.url }/pesquisaCampanha?search=${value}`)
  }

  listarCampanha (): Observable<any>{
    return this.http.get<any>(`${ this.url }/listagemCampanha`)
  }

  listarCampanhaVacina(params: string): Observable<any>{
    return this.http.get<any>(`${ this.url }/listagemCampanhaVacina?codvacina=${params}`)
  }
}
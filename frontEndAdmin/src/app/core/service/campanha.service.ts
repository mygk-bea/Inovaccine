import { Injectable } from '@angular/core';
import { Campanha } from '../interfaces/campanha';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  listarCampanhaVacina(codVacina: string): Observable<any> {
    let params = new HttpParams().set('fk_campanha_codVacina', codVacina);
    return this.http.get<any>(`${ this.url }/listagemCampanhaVacina`, { params });
  }
}
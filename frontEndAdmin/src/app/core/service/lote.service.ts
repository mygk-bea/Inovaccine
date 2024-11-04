import { Injectable } from '@angular/core';
import { Lote } from '../interfaces/lote';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoteService {
  private url: string = "http://localhost:8000/api";
  constructor(private http : HttpClient) { }

  cadastrarLote(lote: Lote){
    console.log(lote);
    this.http.post(`${ this.url }/cadLote`, lote)
    .subscribe(response => {
      console.log(response)
    })
  }

  listarLote(codVacina: string): Observable<any> {
      let params = new HttpParams().set('fk_lote_codVacina', codVacina);
      return this.http.get<any>(`${ this.url }/listagemLote`, { params });
  }
}
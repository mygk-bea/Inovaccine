import { Injectable } from '@angular/core';
import { Lote } from '../interfaces/lote';
import { HttpClient  } from '@angular/common/http';
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

  listarLote(params: string): Observable<Lote[]> {
    return this.http.get<Lote[]>(`${ this.url }/listagemLote?codvacina=${params}`);
  }
}
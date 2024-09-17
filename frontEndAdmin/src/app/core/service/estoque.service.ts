import { Injectable } from '@angular/core';
import { Estoque } from '../interfaces/estoque';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
  private url: string = "http://localhost:8000/api";
  constructor(private http : HttpClient) { }

  cadastrarEstoque (estoque: Estoque){
    console.log(estoque);
    this.http.post(`${ this.url }/estoque`, estoque)
    .subscribe(response => {
      console.log(response)
    })
  }
}
import { Injectable } from '@angular/core';
import { Fornecedor } from '../interfaces/fornecedor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  private url: string = "http://localhost:8000/api";
  constructor(private http : HttpClient) { }
  
  cadastrarFornecedor(fornecedor: Fornecedor){
    console.log(fornecedor);
    this.http.post(`${ this.url }/cadFornecedor`, fornecedor)
    .subscribe(response => {
      console.log(response)
    })
  }
  
  listarFornecedor(): Observable<any>{
    return this.http.get<any>(`${ this.url }/listagemFornecedor`)
  }
}
import { Injectable } from '@angular/core';
import { Funcionario } from '../interfaces/funcionario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private url: string = "http://localhost:8000/api";
  constructor(private http : HttpClient) { }

  cadastrarFuncionario (funcionario: Funcionario){
    console.log(funcionario);
    this.http.post(`${ this.url }/cadFuncionario`, funcionario)
    .subscribe(response => {
      console.log(response)
    })
  }

  pesquisarFuncionario (value: string): Observable<any>{
    return this.http.get<any>(`${ this.url }/pesquisaFuncionario?search=${value}`)
  }

  listarFuncionario (): Observable<any>{
    return this.http.get<any>(`${ this.url }/listagemFuncionario`)
  }

}

import { Injectable } from '@angular/core';
import { Funcionario } from '../interfaces/funcionario';
import { HttpClient } from '@angular/common/http';

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
}

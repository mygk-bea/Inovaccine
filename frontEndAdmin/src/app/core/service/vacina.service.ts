import { Injectable } from '@angular/core';
import { Vacina } from '../interfaces/vacina';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VacinaService {
  private url: string = "http://localhost:8000/api";

  constructor(private http : HttpClient) { }

  cadastrarVacina (vacina: Vacina){
    console.log(vacina);
    this.http.post(`${ this.url }/cadVacina`, vacina)
    .subscribe(response => {
      console.log(response)
    })
  }
}

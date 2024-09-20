import { Injectable } from '@angular/core';
import { Vacina } from '../interfaces/vacina';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VacinaService {
private url: string = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }

  listarVacinas(): Observable<Vacina[]> {
    return this.http.get<Vacina[]>(`${this.url}/listagemVacina`);
  }
}

import { Injectable } from '@angular/core';
import { Postagem } from '../interfaces/postagem';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  private url: string = "http://localhost:8000/api";

  constructor(private http : HttpClient) { }

  cadastrarVacina (postagem: Postagem){
    console.log(postagem);
    this.http.post(`${ this.url }/cadPostagem`, postagem)
    .subscribe(response => {
      console.log(response)
    })
  }

  listarPostagem(): Observable<any>{
    return this.http.get<any>(`${ this.url }/mural`)
  }

}

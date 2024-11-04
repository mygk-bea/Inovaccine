import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disk_denuncia } from '../interfaces/disk_denuncia'; // Importe a interface

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {
  private url: string = "http://localhost:8000/api";
  constructor(private http : HttpClient) { }

  cadastrarDenuncia (denuncia: Disk_denuncia){
    console.log(denuncia);
    this.http.post(`${ this.url }/cadDenuncia`, denuncia)
    .subscribe(response => {
      console.log(response)
    })
  }

  listarADenuncia(): Observable<any>{
    return this.http.get<any>(`${ this.url }/listagemDenuncia`)
  }
}

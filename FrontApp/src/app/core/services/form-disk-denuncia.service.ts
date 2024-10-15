import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Denuncia } from '../interfaces/disk_denuncia'; // Importe a interface

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {
  private apiUrl = 'https://sua-api.com/denuncia';

  constructor(private http: HttpClient) {}

  enviarDenuncia(denuncia: Denuncia): Observable<any> {
    return this.http.post(this.apiUrl, denuncia);
  }
}

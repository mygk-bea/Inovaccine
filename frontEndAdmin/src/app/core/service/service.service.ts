import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpHeaders } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url: string = "http://127.0.0.1:8000";
  constructor(private http: HttpClient) { }

  public post(url: string = this.url){
    // return this.http.post();
  }
}

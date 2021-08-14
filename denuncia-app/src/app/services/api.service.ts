import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }

  pegarSecretarias() {
    return this.http.get(`${this.baseUrl}/secretaria`);
  }

}

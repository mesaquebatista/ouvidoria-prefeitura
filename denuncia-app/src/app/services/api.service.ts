import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  pegarSecretarias() {
    // return this.http.get(`${this.baseUrl}/sectors`);
    return new Promise((resolve, reject) => {

      let url = `${this.baseUrl}/sectors`;

      this.http.get(url)
        .subscribe((result: any) => {
          console.log(result);
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }

  enviarDenuncia(data) {
    return new Promise((resolve, reject) => {

      let url = `${this.baseUrl}/denuncia/store`;

      this.http.post(url, data)
        .subscribe((result: any) => {
          console.log(result);
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }

}

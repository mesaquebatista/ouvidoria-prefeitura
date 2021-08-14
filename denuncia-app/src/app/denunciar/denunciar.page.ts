import { Component, OnInit } from '@angular/core';
import { ApiService } = require('../services/api.service');
// import 
interface Secretaria {
  id: number,
  nome: string
}

@Component({
  selector: 'app-denunciar',
  templateUrl: './denunciar.page.html',
  styleUrls: ['./denunciar.page.scss'],
})
export class DenunciarPage implements OnInit {

  secretarias: Secretaria[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.pegarSecretarias().subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit() {
  }

}

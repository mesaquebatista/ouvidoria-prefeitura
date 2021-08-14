import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
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
    this.apiService.pegarSecretarias()
      .then((result: any) => {
        console.log(result);
        for(let i = 0; i < result.sectors.length; i++){
          var user = result.sectors[i];
          this.secretarias.push(user);
        }
      })
  }
  

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoadingController } from '@ionic/angular';
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
  setor_id: number;
  descricao: string;
  secretarias: Secretaria[] = [];

  constructor(private apiService: ApiService, private loadingController: LoadingController) {
    this.apiService.pegarSecretarias()
      .then((result: any) => {
        console.log(result);
        for(let i = 0; i < result.sectors.length; i++){
          var user = result.sectors[i];
          this.secretarias.push(user);
        }
      })
  }

  async functionButtonClick() {
      let loading = await this.loadingController.create({
        message: "Enviando"
      })
      await loading.present();
      // TODO: ENVIAR
      let data = {
        descricao: this.descricao,
        role_id: this.setor_id
      }
      this.apiService.enviarDenuncia(data)
        .then((result: any) => {
          console.log('Enviado', result);
        });
      await loading.dismiss();
  }
  

  ngOnInit() {
  }

}

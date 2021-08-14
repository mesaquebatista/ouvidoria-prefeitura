import { Component, OnInit } from '@angular/core';
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

  secretarias: Secretaria[] = [
    {
      id: 1,
      nome: "Secretaria de saúde"
    }, 
    {
      id: 2,
      nome: "Secretaria de educação"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

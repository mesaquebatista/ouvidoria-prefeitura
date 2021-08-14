import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DenunciarPageRoutingModule } from './denunciar-routing.module';

import { DenunciarPage } from './denunciar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DenunciarPageRoutingModule
  ],
  declarations: [DenunciarPage]
})
export class DenunciarPageModule {}

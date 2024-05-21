import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroClinicaPageRoutingModule } from './cadastro-clinica-routing.module';

import { CadastroClinicaPage } from './cadastro-clinica.page';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroClinicaPageRoutingModule,
    HeaderModule
  ],
  declarations: [CadastroClinicaPage]
})
export class CadastroClinicaPageModule {}

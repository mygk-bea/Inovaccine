import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroClinicaPageRoutingModule } from './cadastro-clinica-routing.module';

import { CadastroClinicaPage } from './cadastro-clinica.page';

import { HeaderModule } from 'src/app/components/header/header.module';
import { DataFormModule } from 'src/app/components/data-form/data-form.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CadastroClinicaPageRoutingModule,
    HeaderModule,
    DataFormModule
  ],
  declarations: [CadastroClinicaPage]
})
export class CadastroClinicaPageModule {}

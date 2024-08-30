import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { HeaderComponent } from 'src/app/components/header/header.component';
import { FormCadastroClinicaComponent } from 'src/app/components/_forms/form-cadastro-clinica/form-cadastro-clinica.component';

@Component({
  selector: 'app-cadastro-clinica',
  templateUrl: './cadastro-clinica.page.html',
  styleUrls: ['./cadastro-clinica.page.scss'],
  standalone: true,
  imports: [
    HeaderComponent, 
    FormCadastroClinicaComponent, 
    IonicModule, 
    CommonModule, 
    FormsModule
  ]})
export class CadastroClinicaPage implements OnInit {

  constructor() { }

  ngOnInit() {


  }

}

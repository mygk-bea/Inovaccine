import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FormCadastroFuncionarioComponent } from 'src/app/components/_forms/form-cadastro-funcionario/form-cadastro-funcionario.component';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.page.html',
  styleUrls: ['./cadastro-funcionario.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule, 
    HeaderComponent, 
    FormCadastroFuncionarioComponent
  ]
})
export class CadastroFuncionarioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

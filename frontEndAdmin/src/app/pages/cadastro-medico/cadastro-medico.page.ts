import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from 'src/app/components/header/header.component';
import { FormCadastroMedicoComponent } from 'src/app/components/form-cadastro-medico/form-cadastro-medico.component';

@Component({
  selector: 'app-cadastro-medico',
  templateUrl: './cadastro-medico.page.html',
  styleUrls: ['./cadastro-medico.page.scss'],
  standalone: true,
  imports: [
    HeaderComponent, 
    FormCadastroMedicoComponent, 
    IonicModule, 
    CommonModule, 
    FormsModule
  ]
})
export class CadastroMedicoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

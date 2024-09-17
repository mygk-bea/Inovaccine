import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FormCadastroVacinaComponent } from 'src/app/components/_forms/form-cadastro-vacina/form-cadastro-vacina.component';

@Component({
  selector: 'app-cadastro-vacina',
  templateUrl: './cadastro-vacina.page.html',
  styleUrls: ['./cadastro-vacina.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent, FormCadastroVacinaComponent]
})
export class CadastroVacinaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

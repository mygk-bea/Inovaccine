import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FormCadastroLoteComponent } from 'src/app/components/_forms/form-cadastro-lote/form-cadastro-lote.component';

@Component({
  selector: 'app-cadastro-lote',
  templateUrl: './cadastro-lote.page.html',
  styleUrls: ['./cadastro-lote.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule, 
    HeaderComponent, 
    FormCadastroLoteComponent
  ]
})
export class CadastroLotePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

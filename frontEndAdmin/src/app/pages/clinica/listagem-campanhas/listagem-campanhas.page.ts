import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonAddComponent } from 'src/app/components/button-add/button-add.component';
import { InputDateComponent } from 'src/app/components/input-date/input-date.component';

@Component({
  selector: 'app-listagem-campanhas',
  templateUrl: './listagem-campanhas.page.html',
  styleUrls: ['./listagem-campanhas.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule, 
    FormsModule,
    HeaderComponent,
    HttpClientModule,
    ButtonAddComponent,
    InputDateComponent
  ]
})
export class ListagemCampanhasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

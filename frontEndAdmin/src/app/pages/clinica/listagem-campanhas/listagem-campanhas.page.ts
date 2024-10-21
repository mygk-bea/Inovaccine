import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonAddComponent } from 'src/app/components/button-add/button-add.component';
import { InputDateComponent } from 'src/app/components/input-date/input-date.component';
import { InputSearchComponent } from 'src/app/components/input-search/input-search.component';
import { ItemCampanhaComponent } from 'src/app/components/item-campanha/item-campanha.component';

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
    InputDateComponent,
    InputSearchComponent,
    ItemCampanhaComponent
  ]
})
export class ListagemCampanhasPage implements OnInit {
  dados: any;

  constructor() { }

  pesquisarCampanha = (value: string) => {
    return "insira os dados das campanhas aqui";
  };

  ngOnInit() {
  }

  onSearchCampanha(results: any[]) {
    console.log(results);
    this.dados = results;
  }

  openModal() {
    console.log("oi")
  }

}

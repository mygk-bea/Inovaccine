import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonAddComponent } from 'src/app/components/button-add/button-add.component';
import { InputDateComponent } from 'src/app/components/_inputs/input-date/input-date.component';
import { InputSearchComponent } from 'src/app/components/_inputs/input-search/input-search.component';
import { ModalFormCadastroCampanhaComponent } from 'src/app/components/_forms/modal-form-cadastro-campanha/modal-form-cadastro-campanha.component';
import { CampanhaService } from 'src/app/core/service/campanha.service';
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
    ItemCampanhaComponent,
    ModalFormCadastroCampanhaComponent
  ],
  providers: [CampanhaService]
})
export class ListagemCampanhasPage implements OnInit {
  dados: any;

  titlesTable = [
    {size:'1', name:'Id'},
    {size:'3', name:'Nome'},
    {size:'3', name:'Vacina'},
    {size:'3', name:'Data de Atividade'},
    {size:'', name:'Status'}
  ];

  constructor(private dadosCampanha: CampanhaService) { }

  pesquisarCampanha = (value: string) => {
    return this.dadosCampanha.pesquisarCampanha(value);
  };

  ngOnInit() {
    this.dadosCampanha.listarCampanha().subscribe(
      (response) => {
        this.dados = response;
        console.log(this.dados);
      },
      (error) => {console.error("ERRO: ", error);}
    )
  }

  onSearchCampanha(results: any[]) {
    console.log(results);
    this.dados = results;
  }
}

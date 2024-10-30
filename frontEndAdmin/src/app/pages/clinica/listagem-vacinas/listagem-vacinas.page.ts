import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonAddComponent } from 'src/app/components/button-add/button-add.component';
import { InputSearchComponent } from 'src/app/components/_inputs/input-search/input-search.component';
import { VacinaService } from 'src/app/core/service/vacina.service';
import { ListCardsVacinaComponent } from 'src/app/components/list-cards-vacina/list-cards-vacina.component';
import { CampanhaService } from 'src/app/core/service/campanha.service';

@Component({
  selector: 'app-listagem-vacinas',
  templateUrl: './listagem-vacinas.page.html',
  styleUrls: ['./listagem-vacinas.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule,
    HeaderComponent,
    HttpClientModule,
    ButtonAddComponent,
    InputSearchComponent,
    ListCardsVacinaComponent
  ],
  providers: [VacinaService]
})
export class ListagemVacinasPage implements OnInit {
  dados: any[] = [];

  constructor(private dadosVacina: VacinaService) { }

  pesquisarVacina = (value: string) => {
    return this.dadosVacina.pesquisarVacina(value);
  }

  ngOnInit() {
    this.dadosVacina.listarVacina().subscribe(
      (response) => {
        this.dados = response;
        console.log(this.dados)
      },
      (error) => {
        console.error("ERRO: ", error);
      }
    );
  }

  onSearchVacina(results: any[]) {
    console.log(results);
    this.dados = results;
  }
}

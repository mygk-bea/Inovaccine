import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ItemCampanhaComponent } from 'src/app/components/item-campanha/item-campanha.component';
import { CommonModule } from '@angular/common';
import { CampanhaService } from 'src/app/core/service/campanha.service';
import { HttpClientModule } from '@angular/common/http';
import { AgendamentoService } from 'src/app/core/service/agendamento.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { TableAccordionComponent } from 'src/app/components/table-accordion/table-accordion.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    HeaderComponent, 
    RouterModule, 
    CommonModule,
    HttpClientModule,
    ItemCampanhaComponent,
    TableAccordionComponent, 
  ],
  providers: [
    CampanhaService,
    AgendamentoService
  ]
})
export class HomePage implements OnInit {
  dados: any;
  dados_agendamentos: any; 

  titlesTable = [
    {size:'', name:'Paciente'},
    {size:'', name:'Telefone'},
    {size:'', name:'Data'},
    {size:'', name:'Valor'},
    {size:'', name:'Comparecimento'},
  ];

  constructor(
    private dadosCampanha: CampanhaService, 
    private dadosAgendamento: AgendamentoService, 
    private authService: AuthService) {}

  ngOnInit() {
    const userData = this.authService.getUserData();

    this.dadosCampanha.listarCampanha().subscribe(
      (response) => {
        this.dados = response.filter((campanha: any) => campanha.status === 1);
        console.log(this.dados);
      },
      (error) => {console.error("ERRO: ", error);}
    )  

    this.dadosAgendamento.listarAgendamento(userData?.id).subscribe(
      (response) => {
        this.dados_agendamentos = response;
        console.log(this.dados_agendamentos);
      },
      (error) => {console.error("ERRO: ", error);}
    )  
  }
}

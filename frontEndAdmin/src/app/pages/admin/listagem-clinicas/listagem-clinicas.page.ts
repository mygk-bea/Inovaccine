import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { TableAccordionComponent } from 'src/app/components/table-accordion/table-accordion.component';
import { ClinicaService } from 'src/app/core/service/clinica.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listagem-clinicas',
  templateUrl: './listagem-clinicas.page.html',
  styleUrls: ['./listagem-clinicas.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule, 
    HeaderComponent, 
    TableAccordionComponent, 
    HttpClientModule
  ],
  providers: [ClinicaService]
})
export class ListagemClinicasPage implements OnInit {
  dados: any;

  constructor(private dadosClinica: ClinicaService) { }

  ngOnInit() {
    this.dadosClinica.listarClinica().subscribe(
      (response) => {
        this.dados = response;
        console.log(this.dados);

      },
      (error) => {console.error("ERRO: ", error);}
    )
  }

  titlesTable = [
    {name:'Clínica'},
    {name:'Médico'},
    {name:'Telefone'},
    {name:'Horário de Funcionamento'}
  ];
}

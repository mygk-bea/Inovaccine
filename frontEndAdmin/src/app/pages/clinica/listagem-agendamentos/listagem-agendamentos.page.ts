import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AgendamentoService } from 'src/app/core/service/agendamento.service';

@Component({
  selector: 'app-listagem-agendamentos',
  templateUrl: './listagem-agendamentos.page.html',
  styleUrls: ['./listagem-agendamentos.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule, 
    FormsModule,
    HeaderComponent,
    HttpClientModule,
  ],
  providers: [AgendamentoService]
})
export class ListagemAgendamentosPage implements OnInit {
  dados: any;

  titlesTable = [
    {size:'1', name:'Id'},
    {size:'', name:'Nome'},
    {size:'', name:'Data de Atividade'},
    {size:'2', name:'Status'}
  ];

  constructor(private dadosAgendamento: AgendamentoService) { }

  ngOnInit() {
  }

}

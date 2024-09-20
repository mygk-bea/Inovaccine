import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonIcon,IonList, IonModal } from '@ionic/angular/standalone';
import { CardsAgendaComponent } from 'src/app/components/cards-agenda/cards-agenda.component';

@Component({
  selector: 'app-agendamento-page',
  templateUrl: './agendamento-page.page.html',
  styleUrls: ['./agendamento-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,MenuComponent,CardsAgendaComponent,IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonIcon,IonList,IonModal]
})
export class AgendamentoPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

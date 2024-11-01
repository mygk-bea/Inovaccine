import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonIcon, IonAccordionGroup, IonItem, IonAccordion } from '@ionic/angular/standalone'
import { addIcons } from 'ionicons';
import { calendar, checkmarkOutline, documentTextSharp, personAddSharp, searchOutline } from 'ionicons/icons';
import { HttpClientModule } from '@angular/common/http';
import { CardsVacinaComponent } from 'src/app/components/cards-vacina/cards-vacina.component';
import { HeaderComponentComponent } from 'src/app/components/header-component/header-component.component';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.page.html',
  styleUrls: ['./tela-inicial.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton,IonIcon,IonAccordionGroup,IonItem,IonAccordion,HttpClientModule,CardsVacinaComponent,HeaderComponentComponent],

})
export class TelaInicialPage implements OnInit {
userName: string | null = null;
  constructor() { 
    addIcons({ personAddSharp, searchOutline, calendar, documentTextSharp,checkmarkOutline });
  }

  ngOnInit() {
    this.userName = sessionStorage.getItem('userName');
  }

}

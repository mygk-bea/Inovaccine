import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonIcon, IonAccordionGroup, IonItem, IonAccordion } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { calendar, documentTextSharp, personAddSharp, searchOutline } from 'ionicons/icons';
import { MenuComponent } from 'src/app/components/menu/menu.component';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.page.html',
  styleUrls: ['./tela-inicial.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MenuComponent, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton,IonIcon,IonAccordionGroup,IonItem,IonAccordion]
})
export class TelaInicialPage implements OnInit {

  constructor() { 
    addIcons({ personAddSharp, searchOutline, calendar, documentTextSharp });
  }

  ngOnInit() {
  }

}

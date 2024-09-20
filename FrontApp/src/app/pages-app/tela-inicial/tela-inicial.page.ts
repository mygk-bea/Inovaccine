import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonIcon, IonAccordionGroup, IonItem, IonAccordion } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { calendar, documentTextSharp, personAddSharp, searchOutline } from 'ionicons/icons';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { VacinaService } from 'src/app/core/services/vacina.service';
import { Vacina } from 'src/app/core/interfaces/vacina';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.page.html',
  styleUrls: ['./tela-inicial.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MenuComponent, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton,IonIcon,IonAccordionGroup,IonItem,IonAccordion,HttpClientModule],
  providers: [VacinaService]

})
export class TelaInicialPage implements OnInit {
vacina: Vacina[] = []
  constructor(private vacinaService: VacinaService) { 
    addIcons({ personAddSharp, searchOutline, calendar, documentTextSharp });
  }

  ngOnInit() {
    this.vacinaService.listarVacinas().subscribe((dados: Vacina[]) => {
      this.vacina = dados;
    });
  }

}

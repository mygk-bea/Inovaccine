import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonIcon, IonAccordionGroup, IonItem, IonAccordion } from '@ionic/angular/standalone';
import { VacinaService } from 'src/app/core/services/vacina.service';
import { Vacina } from 'src/app/core/interfaces/vacina';
import { HttpClientModule } from '@angular/common/http';
import { addIcons } from 'ionicons';
import { alertCircleOutline, calendar, documentTextSharp, logOutOutline, personOutline, searchOutline } from 'ionicons/icons';


@Component({
  selector: 'app-cards-vacina',
  templateUrl: './cards-vacina.component.html',
  styleUrls: ['./cards-vacina.component.scss'],
  standalone:true,
  imports: [CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton,IonIcon,IonAccordionGroup,IonItem,IonAccordion,HttpClientModule],
  providers: [VacinaService]
})
export class CardsVacinaComponent  implements OnInit {

  vacina: Vacina[] = []
  constructor(private vacinaService: VacinaService) { 
    addIcons({ searchOutline, calendar, documentTextSharp,logOutOutline,personOutline, alertCircleOutline });
  }

  ngOnInit() {
    this.vacinaService.listarVacinas().subscribe((dados: Vacina[]) => {
      this.vacina = dados;
    });
  }

}

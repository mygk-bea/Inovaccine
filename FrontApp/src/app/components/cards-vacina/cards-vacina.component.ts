import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonIcon, IonAccordionGroup, IonItem, IonAccordion, IonRow, IonCol, IonLoading } from '@ionic/angular/standalone';
import { VacinaService } from 'src/app/core/services/vacina.service';
import { Vacina } from 'src/app/core/interfaces/vacina';
import { HttpClientModule } from '@angular/common/http';
import { addIcons } from 'ionicons';
import { alertCircleOutline, calendar, documentTextSharp, logOutOutline, personOutline, searchOutline, checkmarkOutline } from 'ionicons/icons';
import { MenuComponent } from '../menu/menu.component';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-cards-vacina',
  templateUrl: './cards-vacina.component.html',
  styleUrls: ['./cards-vacina.component.scss'],
  standalone: true,
  imports: [IonLoading, CommonModule, FormsModule, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonIcon, IonAccordionGroup, IonItem, IonAccordion, HttpClientModule, IonRow, IonCol, MenuComponent],
  providers: [VacinaService]
})
export class CardsVacinaComponent implements OnInit {

  vacina: Vacina[] = []; // Inicializa com um array vazio
  isLoading: boolean = false; 

  constructor(private vacinaService: VacinaService, private loadingController: LoadingController) { 
    addIcons({searchOutline,documentTextSharp,checkmarkOutline,alertCircleOutline,calendar,logOutOutline,personOutline});
  }

  async ngOnInit() {
    await this.loadVacinas();
  }

  async loadVacinas() {
    const loading = await this.loadingController.create({
      message: 'Carregando vacinas...',
      spinner: 'crescent',
    });
    
    await loading.present(); // Exibe o loader

    try {
      this.vacina = await this.vacinaService.listarVacinas().toPromise() || []; // Atribui um array vazio caso seja undefined
    } catch (error) {
      console.error('Erro ao carregar vacinas', error);
    } finally {
      await loading.dismiss(); // Esconde o loader
    }
  }
}

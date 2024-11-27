import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonIcon, IonAccordionGroup, IonItem, IonAccordion, IonRow, IonCol, IonLoading, IonFooter, IonContent } from '@ionic/angular/standalone';
import { VacinaService } from 'src/app/core/services/vacina.service';
import { Vacina } from 'src/app/core/interfaces/vacina';
import { HttpClientModule } from '@angular/common/http';
import { addIcons } from 'ionicons';
import { alertCircleOutline, calendar, documentTextSharp, logOutOutline, personOutline, searchOutline, checkmarkOutline } from 'ionicons/icons';
import { MenuComponent } from '../menu/menu.component';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cards-vacina',
  templateUrl: './cards-vacina.component.html',
  styleUrls: ['./cards-vacina.component.scss'],
  standalone: true,
  imports: [IonLoading, CommonModule, FormsModule, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonIcon, IonAccordionGroup, IonItem, IonAccordion, HttpClientModule, IonRow, IonCol, MenuComponent,IonFooter,IonContent],
  providers: [VacinaService]
})
export class CardsVacinaComponent implements OnInit {

  vacina: Vacina[] = []; // Inicializa com um array vazio
  isLoading: boolean = false; 
  searchQuery: string = '';

  constructor(private vacinaService: VacinaService, private loadingController: LoadingController,private router: Router) { 
    addIcons({searchOutline,documentTextSharp,checkmarkOutline,alertCircleOutline,calendar,logOutOutline,personOutline});
  }

  async ngOnInit() {
    await this.loadVacinas();
  }

  navigateToCarteirinha() {
    this.router.navigate(['/carteirinha']);
  }

  navigateToServicos() {
    this.router.navigate(['/agendamento-page']);
  }
  navigateToAgendamentos() {
    this.router.navigate(['/vacina-em-casa-page']);
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
  searchVacinas() {
    if (this.searchQuery.trim() !== '') {
      this.vacinaService.pesquisarVacinas().subscribe((data) => {   
        this.vacina = data.filter((vacina) =>
          vacina.nome.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      });
    } else {
      this.loadVacinas();
    }
  }
}

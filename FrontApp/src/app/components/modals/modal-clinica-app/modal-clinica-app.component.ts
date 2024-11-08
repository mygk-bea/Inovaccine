import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonIcon,IonList, IonModal, IonLabel, IonItem } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { helpBuoySharp } from 'ionicons/icons';
import { ClinicaService } from 'src/app/core/services/lista-clinica/lista-clinica.service';
import { Clinica } from 'src/app/core/interfaces/clinica';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'modal-app',
  templateUrl: './modal-clinica-app.component.html',
  styleUrls: ['./modal-clinica-app.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonIcon,IonList,IonModal,IonItem,IonLabel,CommonModule],
  providers:[ClinicaService]
})
export class ModalClinicaAppComponent  implements OnInit {

  clinicas: Clinica[] = [];

  constructor(private clinicaService:ClinicaService) {
    addIcons({ helpBuoySharp});
   }
   ngOnInit() {
    this.loadClinicas();
   }
   
   async loadClinicas() {
    try {
      // Aguarda a resolução da Promise e atribui o resultado a vacinasDisponiveis
      this.clinicas = await this.clinicaService.listarClinica().toPromise() || [];
    } catch (error) {
      console.error('Erro ao carregar vacinas', error);
    }
  }
}

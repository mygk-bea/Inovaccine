import { Component, OnInit } from '@angular/core';
import { IonDatetime, IonItem, IonLabel, IonSelect, IonSelectOption, IonButton, IonHeader, IonToolbar, IonContent, IonTitle, IonIcon, IonRow, IonCol } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { arrowBack } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { DataSharingService } from 'src/app/core/services/data-sharing.service';
import { NavController, AnimationController, AnimationBuilder } from '@ionic/angular';
import { HeaderComponentComponent } from '../../header-component/header-component.component';
import { FooterComponent } from '../../footer/footer.component';
import { DataInputComponent } from './data-input/data-input.component';

@Component({
  selector: 'FormVacinaEmCasa',
  templateUrl: './form-vacina-em-casa.component.html',
  styleUrls: ['./form-vacina-em-casa.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonDatetime,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonHeader,
    IonToolbar,
    IonContent,
    IonTitle,
    IonIcon,
    IonRow,
    IonCol,
    HeaderComponentComponent,
    FooterComponent,
    DataInputComponent,
  ]
})
export class FormVacinaEmCasaComponent implements OnInit {
  selectedDate: string | undefined;
  selectedTime: string | undefined;
  selectedVaccine: string | undefined;
  selectedPaymentMethod: string | undefined;
  selectedClinic: string | undefined;

  public selectedMode: string | undefined; // Modalidade de agendamento
  public showAdditionalFields: boolean = false; // Exibir campos adicionais
  public isHomeVisit: boolean = false; // Indica se a modalidade é "vacina em casa"
  public clinics: string[] = []; // Adiciona uma lista de clínicas
  public showPaymentMethodLabel: boolean = false; // Controla a exibição da label de forma de pagamento

  constructor(
    private dataSharingService: DataSharingService,
    private navCtrl: NavController,
    private animationCtrl: AnimationController
  ) {
    addIcons({ arrowBack });
  }

  ngOnInit() {
    // Inicializa as clínicas disponíveis
    this.clinics = ['Clínica A', 'Clínica B', 'Clínica C']; // Você pode preencher com dados reais
    
    // Assinatura dos dados compartilhados
    this.dataSharingService.date$.subscribe(date => this.selectedDate = date);
    this.dataSharingService.time$.subscribe(time => this.selectedTime = time);
    this.dataSharingService.vaccine$.subscribe(vaccine => this.selectedVaccine = vaccine);
    this.dataSharingService.payment$.subscribe(payment => this.selectedPaymentMethod = payment);
  }

  // Método para navegar para uma nova página
  navigateTo(path: string, direction: 'back') {
    const animation: AnimationBuilder | undefined = direction === 'back' ? this.createBackwardAnimation() : undefined;
    this.navCtrl.navigateForward(path, { animation });
  }

  createBackwardAnimation() {
    return (baseEl: any, opts?: any) => {
      const enterAnimation = this.animationCtrl.create()
        .addElement(opts.enteringEl)
        .duration(150)
        .easing('ease-out')
        .fromTo('opacity', 0, 1)
        .fromTo('transform', 'translateX(-100%)', 'translateX(0)');

      const leaveAnimation = this.animationCtrl.create()
        .addElement(opts.leavingEl)
        .duration(150)
        .easing('ease-in')
        .fromTo('opacity', 1, 0)
        .fromTo('transform', 'translateX(0)', 'translateX(100%)');

      return this.animationCtrl.create()
        .addAnimation([enterAnimation, leaveAnimation]);
    };
  }

  // Método para lidar com a mudança de modalidade
  onModalityChange(event: any) {
    this.selectedMode = event.detail.value; // Atualiza a modalidade selecionada
    this.isHomeVisit = this.selectedMode === 'casa'; // Verifica se é "vacina em casa"
    this.showAdditionalFields = true; // Mostra os campos adicionais
  }

  handleDateChange(event: any) {
    this.dataSharingService.setDate(event.detail.value); // Atualiza a data no serviço
  }

  handleTimeChange(event: any) {
    this.dataSharingService.setTime(event.detail.value); // Atualiza a hora no serviço
  }

  handleVaccineChange(event: any) {
    this.dataSharingService.setVaccine(event.detail.value); // Atualiza a vacina no serviço
  }

  handlePaymentChange(event: any) {
    this.dataSharingService.setPayment(event.detail.value); // Atualiza a forma de pagamento no serviço
  }

  handleClinicChange(event: any) {
    this.selectedClinic = event.detail.value; // Atualiza a clínica selecionada
  }

  onSubmit() {
    if (this.selectedDate && this.selectedTime) {
      // Lógica para enviar o formulário
      console.log('Formulário enviado com sucesso!');
    } else {
      console.log('Por favor, preencha todos os campos obrigatórios.');
    }
  }
}

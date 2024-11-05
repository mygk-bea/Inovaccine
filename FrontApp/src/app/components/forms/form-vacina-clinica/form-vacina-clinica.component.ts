import { Component, OnInit } from '@angular/core';
import { IonDatetime, IonItem, IonLabel, IonSelect, IonSelectOption, IonButton, IonHeader, IonToolbar, IonContent, IonTitle, IonIcon } from '@ionic/angular/standalone';
import { arrowBack } from 'ionicons/icons';
import { addIcons } from 'ionicons';

import { NavController, AnimationController, AnimationBuilder } from '@ionic/angular';
import { ShareDataClinicaService } from 'src/app/core/services/share-data-clinica.service';

import { Agendamento } from 'src/app/core/interfaces/agendamento';
import { AuthLoginService } from 'src/app/core/services/login/auth-login.service';


@Component({
  selector: 'app-form-vacina-clinica',
  templateUrl: './form-vacina-clinica.component.html',
  styleUrls: ['./form-vacina-clinica.component.scss'],
  standalone: true,
  imports: [
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
  ],
  providers: [AuthLoginService]
})
export class FormVacinaClinicaComponent implements OnInit {
  selectedDate: string | undefined;
  selectedTime: string | undefined;
  selectedVaccine: string | undefined;
  selectedClinicMethod: string | undefined;

  constructor(private navCtrl: NavController, private animationCtrl: AnimationController, private shareDataClinicaService: ShareDataClinicaService, private authService: AuthLoginService) {
    addIcons({ arrowBack });
  }

  userId = this.authService.getUserId();

  dados: Agendamento = {
    valor: '',
    fk_paciente_codPaciente: '',
    fk_clinica_codClinica: '',
    fk_campanha_codCampanha: '',
    dataHora: '',
    comparecimento: false,
    forma_Pagamento: '',
    residencial: false
  };


  navigateTo(path: string, direction: 'back') {
    // Use o NavController para navegação com animação
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
  ngOnInit() {
    this.shareDataClinicaService.date$.subscribe(date => this.selectedDate = date);
    this.shareDataClinicaService.time$.subscribe(time => this.selectedTime = time);
    this.shareDataClinicaService.vaccine$.subscribe(vaccine => this.selectedVaccine = vaccine);
    this.shareDataClinicaService.clinic$.subscribe(clinic => this.selectedClinicMethod = clinic);
  }
  handleDateChange(event: any) {
    this.shareDataClinicaService.setDate(event.detail.value);
  }

  handleTimeChange(event: any) {
    this.shareDataClinicaService.setTime(event.detail.value);
  }

  handleVaccineChange(event: any) {
    this.shareDataClinicaService.setVaccine(event.detail.value);
  }

  handleClinicChange(event: any) {
    this.shareDataClinicaService.setClinic(event.detail.value);
  }
  onSubmit() {

    this.dados.fk_paciente_codPaciente = this.userId;

    if (this.selectedDate && this.selectedTime) {
      const formattedDateTime = this.formatDate(this.selectedDate) + ' ' + this.selectedTime;
      console.log('Data e Hora a serem enviadas para o banco de dados:', formattedDateTime);
      console.log('Vacina:', this.selectedVaccine);
      console.log('Clinica selecionada', this.selectedClinicMethod);
      // Aqui você enviaria os dados para o backend
    } else {
      console.error('Dados insuficientes para o envio!');
    }
  }
  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}

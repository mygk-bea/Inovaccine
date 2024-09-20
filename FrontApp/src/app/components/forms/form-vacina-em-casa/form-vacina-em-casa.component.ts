import { Component, OnInit } from '@angular/core';
import { IonDatetime, IonItem, IonLabel, IonSelect, IonSelectOption, IonButton,IonHeader,IonToolbar,IonContent,IonTitle,IonIcon} from '@ionic/angular/standalone';
import {arrowBack} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { InputDataComponent } from './input-data/input-data.component';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { NavController, AnimationController, AnimationBuilder } from '@ionic/angular';



@Component({
  selector: 'FormVacinaEmCasa',
  templateUrl: './form-vacina-em-casa.component.html',
  styleUrls: ['./form-vacina-em-casa.component.scss'],
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
    InputDataComponent,
  ]
})
export class FormVacinaEmCasaComponent implements OnInit {
  selectedDate: string | undefined;
  selectedTime: string | undefined;
  selectedVaccine: string | undefined;
  selectedPaymentMethod: string | undefined;

  constructor(private dataSharingService: DataSharingService, private navCtrl: NavController, private animationCtrl: AnimationController){
    addIcons({arrowBack});
    
  }
  navigateTo(path: string, direction: 'back') {
    // Use o NavController para navegação com animação
    const animation: AnimationBuilder | undefined = direction === 'back' ? this. createBackwardAnimation() : undefined;
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
    this.dataSharingService.date$.subscribe(date => this.selectedDate = date);
    this.dataSharingService.time$.subscribe(time => this.selectedTime = time);
    this.dataSharingService.vaccine$.subscribe(vaccine => this.selectedVaccine = vaccine);
    this.dataSharingService.payment$.subscribe(payment => this.selectedPaymentMethod = payment);
  }

  handleDateChange(event: any) {
    this.dataSharingService.setDate(event.detail.value);
  }

  handleTimeChange(event: any) {
    this.dataSharingService.setTime(event.detail.value);
  }

  handleVaccineChange(event: any) {
    this.dataSharingService.setVaccine(event.detail.value);
  }

  handlePaymentChange(event: any) {
    this.dataSharingService.setPayment(event.detail.value);
  }

  onSubmit() {
    if (this.selectedDate && this.selectedTime) {
      const formattedDateTime = this.formatDate(this.selectedDate) + ' ' + this.selectedTime;
      console.log('Data e Hora a serem enviadas para o banco de dados:', formattedDateTime);
      console.log('Vacina:', this.selectedVaccine);
      console.log('Forma de Pagamento:', this.selectedPaymentMethod);
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



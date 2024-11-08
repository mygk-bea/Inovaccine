import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonLabel, IonItem, IonList, IonModal } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowForward, calendarNumber, helpBuoy, home, personCircle } from 'ionicons/icons';
import { NavController, AnimationController, AnimationBuilder } from '@ionic/angular';
import { ModalClinicaAppComponent } from '../modals/modal-clinica-app/modal-clinica-app.component';


@Component({
  selector: 'app-cards-agenda',
  templateUrl: './cards-agenda.component.html',
  styleUrls: ['./cards-agenda.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonLabel, IonItem, IonList, IonModal,ModalClinicaAppComponent]
})
export class CardsAgendaComponent implements OnInit {

  constructor(private navCtrl: NavController, private animationCtrl: AnimationController) { 
    addIcons({ home, arrowForward, helpBuoy, calendarNumber, personCircle });
  }

  navigateTo(path: string, direction: 'forward') {
    // Use o NavController para navegação com animação
    const animation: AnimationBuilder | undefined = direction === 'forward' ? this.createForwardAnimation() : undefined;
    this.navCtrl.navigateForward(path, { animation });
  }

  createForwardAnimation(): AnimationBuilder {
    // Crie uma animação de transição para frente (da esquerda para a direita)
    return (baseEl: any, opts?: any) => {
      const enterAnimation = this.animationCtrl.create()
        .addElement(opts?.enteringEl)
        .duration(150)
        .easing('ease-out')
        .fromTo('opacity', 0, 1)
        .fromTo('transform', 'translateX(100%)', 'translateX(0)');

      const leaveAnimation = this.animationCtrl.create()
        .addElement(opts?.leavingEl)
        .duration(150)
        .easing('ease-in')
        .fromTo('opacity', 1, 0)
        .fromTo('transform', 'translateX(0)', 'translateX(-100%)');

      return this.animationCtrl.create()
        .addAnimation([enterAnimation, leaveAnimation]);
    };
  }

  ngOnInit() {}

}

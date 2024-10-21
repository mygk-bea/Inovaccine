import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonLabel, IonItem, IonList, IonModal } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowForward, calendar, helpBuoy, home, personCircle, documentText } from 'ionicons/icons';
import { NavController, AnimationController, AnimationBuilder } from '@ionic/angular';
import { ModalClinicasComponent } from '../modals/modal-clinicas/modal-clinicas.component';

@Component({
  selector: 'card-agenda-desktop',
  templateUrl: './card-agenda-desktop.component.html',
  styleUrls: ['./card-agenda-desktop.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonLabel, IonItem, IonList, IonModal, ModalClinicasComponent]
})
export class CardAgendaDesktopComponent  implements OnInit {

  constructor(private navCtrl: NavController, private animationCtrl: AnimationController) { 
    addIcons({calendar,documentText,home,arrowForward,helpBuoy,personCircle});
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

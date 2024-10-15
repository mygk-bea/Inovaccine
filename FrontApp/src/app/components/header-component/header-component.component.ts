import { Component, OnInit } from '@angular/core';
import { IonHeader, IonIcon,NavController, AnimationController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss'],
  standalone:true,
  imports:[IonIcon,IonHeader]
})
export class HeaderComponentComponent  implements OnInit {

  constructor(private navCtrl: NavController, private animationCtrl: AnimationController) { 
    addIcons({logOutOutline,personOutline});
  }

  ngOnInit() {}
  navigateTo(path: string, direction: 'forward' | 'back') {
    // Use o NavController para navegação com animação
    const animation = direction === 'forward' ? this.createForwardAnimation() : undefined;
    this.navCtrl.navigateForward(path, { animation });
  }

  createForwardAnimation() {
    // Crie uma animação de transição para frente (da esquerda para a direita)
    return (baseEl: any, opts?: any) => {
      const enterAnimation = this.animationCtrl.create()
        .addElement(opts.enteringEl)
        .duration(150)
        .easing('ease-out')
        .fromTo('opacity', 0, 1)
        .fromTo('transform', 'translateX(100%)', 'translateX(0)');

      const leaveAnimation = this.animationCtrl.create()
        .addElement(opts.leavingEl)
        .duration(150)
        .easing('ease-in')
        .fromTo('opacity', 1, 0)
        .fromTo('transform', 'translateX(0)', 'translateX(-100%)');

      return this.animationCtrl.create()
        .addAnimation([enterAnimation, leaveAnimation]);
    };
  }

}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController, AnimationController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { home, personCircleOutline, receipt } from 'ionicons/icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class MenuComponent implements OnInit {

  constructor(private navCtrl: NavController, private animationCtrl: AnimationController) {
    // Adicione os ícones aqui
    addIcons({ home, receipt, personCircleOutline });
  }

  ngOnInit() {}

  navigateTo(path: string, direction: 'forward' | 'back') {
    // Use o NavController para navegação com animação
    const animation = direction === 'forward' ? this.createForwardAnimation() : this.createBackwardAnimation();
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

  createBackwardAnimation() {
    // Crie uma animação de transição para trás (da direita para a esquerda)
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
}

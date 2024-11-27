import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponentComponent } from 'src/app/components/header-component/header-component.component';
import { VacinaService } from 'src/app/core/services/vacina.service';
import { Vacina } from 'src/app/core/interfaces/vacina';
import { addIcons } from 'ionicons';
import { informationCircleOutline, arrowBack,calendarOutline,hourglassOutline} from 'ionicons/icons';
import { NavController, AnimationController, IonicModule, IonModal } from '@ionic/angular';

@Component({
  selector: 'app-carteirinha',
  templateUrl: './carteirinha.page.html',
  styleUrls: ['./carteirinha.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent, HeaderComponentComponent, IonicModule],
  providers: [VacinaService]
})
export class CarteirinhaPage implements OnInit {
  vacina: Vacina[] = [];
  selectedVacina: Vacina | null = null;  // Variável para armazenar a vacina selecionada
  isModalOpen: boolean = false;  // Controla a visibilidade do modal

  @ViewChild(IonModal, { static: false }) modal: IonModal | undefined;  // Referência ao modal

  constructor(
    private vacinaService: VacinaService,
    private navCtrl: NavController,
    private animationCtrl: AnimationController,
  ) {
    addIcons({ arrowBack, informationCircleOutline,calendarOutline,hourglassOutline});
  }

  ngOnInit() {
    this.loadVacinas(); // Carrega as vacinas ao iniciar a página
  }

  // Método para abrir o modal e definir a vacina selecionada
  openModal(vacina: Vacina) {
    this.selectedVacina = vacina;  // Define a vacina selecionada
    this.isModalOpen = true;  // Abre o modal
  }

  // Método para fechar o modal
  closeModal() {
    this.isModalOpen = false;  // Fecha o modal
  }

  // Método para navegar para outra tela
  navigateTo(path: string, direction: 'back') {
    const animation = direction === 'back' ? this.createBackwardAnimation() : undefined;
    this.navCtrl.navigateForward(path, { animation });
  }

  // Criação de animação personalizada para navegação "back"
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

  // Carrega as vacinas usando o serviço
  async loadVacinas() {
    try {
      this.vacina = await this.vacinaService.listarVacinas().toPromise() || []; // Atribui um array vazio caso seja undefined
    } catch (error) {
      console.error('Erro ao carregar vacinas', error);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController, AnimationController, IonicModule } from '@ionic/angular';
import { HeaderComponentComponent } from 'src/app/components/header-component/header-component.component';
import { AuthLoginService } from 'src/app/core/services/login/auth-login.service';
import { AgendamentoService } from 'src/app/core/services/agendamento.service';
import { Agendamento } from 'src/app/core/interfaces/agendamento';
import { addIcons } from 'ionicons';
import { arrowBack, calendarOutline, informationCircleOutline,cashOutline,alarmOutline} from 'ionicons/icons';

@Component({
  selector: 'app-meus-agendamentos',
  templateUrl: './meus-agendamentos.page.html',
  styleUrls: ['./meus-agendamentos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, HeaderComponentComponent],
  providers: [AuthLoginService, AgendamentoService]
})
export class MeusAgendamentosPage implements OnInit {
  agendamentos: Agendamento[] = [];
  selectedAgendamento: Agendamento | null = null;  // Armazena o agendamento selecionado
  isModalOpen: boolean = false;  // Controla a visibilidade do modal
  pacienteId: string = this.authService.getUserId();

  constructor(
    private navCtrl: NavController,
    private animationCtrl: AnimationController,
    private authService: AuthLoginService,
    private agendamentoService: AgendamentoService
  ) {
    addIcons({ informationCircleOutline, arrowBack, calendarOutline,cashOutline,alarmOutline });
  }

  ngOnInit() {
    this.carregarAgendamentos();
  }

  carregarAgendamentos() {
    this.agendamentoService.listarAgendamento(+this.pacienteId).subscribe(
      (data) => {
        this.agendamentos = data; // Armazena os dados na variável
      },
      (error) => {
        console.error('Erro ao carregar agendamentos:', error);
      }
    );
  }

  // Abre o modal com os detalhes do agendamento
  openModal(agendamento: Agendamento) {
    this.selectedAgendamento = agendamento;  // Define o agendamento selecionado
    this.isModalOpen = true;  // Abre o modal
  }

  // Fecha o modal
  closeModal() {
    this.isModalOpen = false;  // Fecha o modal
  }

  // Método para navegação
  navigateTo(path: string, direction: 'back' | 'forward') {
    const animation = direction === 'back' ? this.createBackwardAnimation() : undefined;
    if (direction === 'back') {
      this.navCtrl.navigateBack(path, { animation });
    } else {
      this.navCtrl.navigateForward(path, { animation });
    }
  }

  // Animação para navegação "back"
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
}

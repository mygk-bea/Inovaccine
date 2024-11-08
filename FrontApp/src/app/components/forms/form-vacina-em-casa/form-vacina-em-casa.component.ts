import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { arrowBack } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { NavController, AnimationController, IonicModule } from '@ionic/angular';
import { HeaderComponentComponent } from '../../header-component/header-component.component';
import { FooterComponent } from '../../footer/footer.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { AuthLoginService } from 'src/app/core/services/login/auth-login.service';
import { AgendamentoService } from 'src/app/core/services/agendamento.service';
import { Vacina } from 'src/app/core/interfaces/vacina';
import { VacinaService } from 'src/app/core/services/vacina.service';
import { ClinicaService } from 'src/app/core/services/lista-clinica/lista-clinica.service';
import { Clinica } from 'src/app/core/interfaces/clinica';
import { Agendamento } from 'src/app/core/interfaces/agendamento';

@Component({
  selector: 'FormVacinaEmCasa',
  templateUrl: './form-vacina-em-casa.component.html',
  styleUrls: ['./form-vacina-em-casa.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponentComponent,
    FooterComponent,
    IonicModule,
    ReactiveFormsModule
  ],
  providers: [AuthLoginService, AgendamentoService, VacinaService, ClinicaService]
})
export class FormVacinaEmCasaComponent implements OnInit {
  formAgenda!: FormGroup;
  vacina: Vacina[] = [];
  clinicas: Clinica[] = [];
  selectedMode: string | undefined;
  isHomeVisit: boolean = false;
  showPaymentMethodLabel: boolean = false;
  showConfirmation: boolean = false;
  
  constructor(
    private navCtrl: NavController,
    private animationCtrl: AnimationController,
    private fb: FormBuilder,
    private authService: AuthLoginService,
    private agendamentoService: AgendamentoService,
    private vacinaService: VacinaService,
    private clinicaService: ClinicaService,
  ) {
    addIcons({ arrowBack });

    
  }
  pacienteId: string = this.authService.getUserId();
  ngOnInit() {
    this.loadVacinas();
    this.loadClinicas(); 
    this.formAgenda = this.fb.group({
      modalidade: ['', Validators.required],
      clinica: ['', Validators.required],
      dia: ['', Validators.required],
      hora: ['', Validators.required],
      formaPagamento: ['', Validators.required],
      vacinas: this.fb.array([]) 
    });
  }
  get vacinas() {
    return (this.formAgenda.get('vacinas') as FormArray);
  }
  onCheckboxChange(e: any) {
    const vacinaControl = this.vacinas;
    if (e.target.checked) {
      vacinaControl.push(this.fb.control(e.target.value));  // Adiciona o número ao FormArray
    } else {
      const index = vacinaControl.controls.findIndex(x => x.value === e.target.value);
      vacinaControl.removeAt(index);  // Remove o número do FormArray
    }
  }
// animação de rota
  navigateTo(path: string, direction: 'back') {
    const animation = direction === 'back' ? this.createBackwardAnimation() : undefined;
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
  onModalityChange(event: any) {
    this.selectedMode = event.detail.value;
    this.isHomeVisit = this.selectedMode === 'casa';
  }
  // 
  async loadVacinas() { 
    try {
      // Aguarda a resolução da Promise e atribui o resultado a vacinasDisponiveis
      this.vacina = await this.vacinaService.listarVacinas().toPromise() || [];
    } catch (error) {
      console.error('Erro ao carregar vacinas', error);
    }
  }

  async loadClinicas() {
    try {
      // Aguarda a resolução da Promise e atribui o resultado a vacinasDisponiveis
      this.clinicas = await this.clinicaService.listarClinica().toPromise() || [];
    } catch (error) {
      console.error('Erro ao carregar vacinas', error);
    }
  }
  
  // Função Confirmar
 onConfirm() { //botão de confirmar agendamento e fazer a requisição da API

    // this.agendamentoService.cadastrarAgendamento().subscribe(
    //   response => {
    //     console.log('Agendamento cadastrado com sucesso:', response);
    //     this.showConfirmation = true; 
    //   },
    //   error => {
    //     console.error('Erro ao cadastrar agendamento:', error);
    //   }
    // );
  } 


  onCancel() {

    this.showConfirmation = false;// Ajuste o caminho conforme necessário
  }

  onSubmit() {
    const vacinasArray = this.formAgenda.get('vacinas') as FormArray;
  
    // Obtendo os valores (verdadeiro ou falso) dos checkboxes
    const vacinasValores = vacinasArray.value;
    
    // Mostra os valores do FormArray (true para vacinas selecionadas, false para desmarcadas)
    const formValues = this.formAgenda.value;
  
  // Exibe os valores no console
  const agendamento: Agendamento = {
    clinica: formValues.clinica,        // ID da clínica selecionada
    modalidade: formValues.modalidade,   // Tipo de agendamento
    paciente: +this.pacienteId,         // ID do paciente, certifique-se que seja um número
    vacinas: formValues.vacinas,         // Vacinas selecionadas (em formato de array de números)
    data: formValues.dia,               // Data escolhida
    hora: formValues.hora,              // Hora escolhida
    formaPagamento: formValues.formaPagamento,  // Forma de pagamento selecionada
  };
  console.log(agendamento);
  this.agendamentoService.cadastrarAgendamento(agendamento).subscribe(
    response => {
      console.log('Agendamento cadastrado com sucesso:', response);
      // this.showConfirmation = true; 
    },
    error => {
      console.error('Erro ao cadastrar agendamento:', error);
      console.log(agendamento)
    }
  );
  }
  
}
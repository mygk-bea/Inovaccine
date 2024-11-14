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
  agendamentoConfirmado: Agendamento | null = null;

  availableTimes: string[] = []; // Armazenar os horários de 30 em 30 minutos

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
      vacinas: this.fb.array([]),
    });
  }

  get vacinas() {
    return (this.formAgenda.get('vacinas') as FormArray);
  }

  onCheckboxChange(e: any) {
    const vacinaControl = this.vacinas;
    if (e.target.checked) {
      vacinaControl.push(this.fb.control(e.target.value)); 
    } else {
      const index = vacinaControl.controls.findIndex(x => x.value === e.target.value);
      vacinaControl.removeAt(index); 
    }
  }

  generateAvailableTimes(startTime: string, endTime: string): string[] {
    const availableTimes: string[] = [];
    
    let start = this.convertToDate(startTime);
    const end = this.convertToDate(endTime);
  
    // Gera os horários de meia em meia hora
    while (start < end) {
      availableTimes.push(this.formatTime(start));
      start = new Date(start.getTime() + 30 * 60000); 
    }
  
    return availableTimes;
  }
  
  
  convertToDate(time: string): Date {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    const now = new Date();
    now.setHours(hours, minutes, seconds, 0); 
    return now;
  }
  

  formatTime(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  

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
 
  onClinicaChange() {
    const selectedClinica = this.clinicas.find(c => c.codClinica === this.formAgenda.value.clinica);
  
 
    if (selectedClinica && selectedClinica.periodoFunc_inicio && selectedClinica.periodoFunc_fim) {
      console.log('Clínica selecionada:', selectedClinica);
  
      
      const horaInicio = selectedClinica.periodoFunc_inicio; 
      const horaFim = selectedClinica.periodoFunc_fim; 
  
     
      this.availableTimes = this.generateAvailableTimes(horaInicio, horaFim);
    } else {
      console.error('Dados de horário não encontrados para a clínica selecionada.');
      this.availableTimes = []; 
    }
  }
  



  async loadClinicas() {
    try {
      this.clinicas = await this.clinicaService.listarClinica().toPromise() || [];
      console.log('Clinicas carregadas:', this.clinicas);
    } catch (error) {
      console.error('Erro ao carregar clínicas', error);
    }
  }

  async loadVacinas() {
    try {
      this.vacina = await this.vacinaService.listarVacinas().toPromise() || [];
    } catch (error) {
      console.error('Erro ao carregar vacinas', error);
    }
  }

  
  onConfirm() {
    if (this.agendamentoConfirmado) {
      this.agendamentoService.cadastrarAgendamento(this.agendamentoConfirmado).subscribe(
        response => {
          console.log('Agendamento cadastrado com sucesso:', response);
          this.formAgenda.reset();
          alert("Agendamento concluído");
        },
        error => {
          console.error('Erro ao cadastrar agendamento:', error);
          alert("Erro ao realizar agendamento");
        }
      );
    } else {

      console.error('Agendamento não encontrado para confirmação.');
      alert("Erro: Agendamento não encontrado.");
    }

    this.showConfirmation = false;
    this.agendamentoConfirmado = null;
  }

  onCancel() {
    this.showConfirmation = false;
    this.agendamentoConfirmado = null;
  }

  onSubmit() {
    const formValues = this.formAgenda.value;
    const agendamento: Agendamento = {
      clinica: formValues.clinica,
      modalidade: formValues.modalidade,
      paciente: +this.pacienteId,
      vacinas: formValues.vacinas, 
      data: formValues.dia,
      hora: formValues.hora,
      forma_Pagamento: formValues.formaPagamento,
    };
  
  
    console.log(agendamento);
  
   
    this.agendamentoConfirmado = agendamento;
  
    
    this.showConfirmation = true;
  }
  vacinasNome(): string[] {
    const formValues = this.formAgenda.value;
    const vacinasSelecionadas = formValues.vacinas.map((id: number) => {
      
      const vacina = this.vacina.find(v => v.codVacina === id); 
      return vacina ? vacina.nome : 'Vacina não encontrada'; 
    });
    
    return vacinasSelecionadas;
  }
  
}

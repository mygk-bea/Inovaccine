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
  vacina: Vacina[] = [];
  clinicas: Clinica[] = [];
  agendamentoForm: FormGroup;
  selectedMode: string | undefined;
  isHomeVisit: boolean = false;
  clinics: string[] = [];
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

    this.agendamentoForm = this.fb.group({
      modalidade: [null, Validators.required],
      data: [null, Validators.required],
      hora: [null, Validators.required],
      vacina: this.fb.array([], Validators.required),
      formaPagamento: [null, Validators.required],
      clinica: [null, Validators.required],
      paciente: [null]
    });
  }
  pacienteId: string = this.authService.getUserId();
  ngOnInit() {
    this.clinics = ['Clínica A', 'Clínica B', 'Clínica C'];
    this.loadVacinas(); //carrega as vacina
    this.loadClinicas(); // carrega as clinicas
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
  // 

  async loadVacinas() { 
    try {
      // Aguarda a resolução da Promise e atribui o resultado a vacinasDisponiveis
      this.vacina = await this.vacinaService.listarVacinas().toPromise() || [];
    } catch (error) {
      console.error('Erro ao carregar vacinas', error);
    }
  }

  get vacinaArray(): FormArray { // pega o array de vacinas
    return this.agendamentoForm.get('vacina') as FormArray;
  }
  async loadClinicas() {
    try {
      // Aguarda a resolução da Promise e atribui o resultado a vacinasDisponiveis
      this.clinicas = await this.clinicaService.listarClinica().toPromise() || [];
    } catch (error) {
      console.error('Erro ao carregar vacinas', error);
    }
  }
  getVacinasSelecionadas(): string { // pega o array de vacinas e procura onde ta o codigo do id pra retornar o nome da vacina
    const selectedVacinas = this.agendamentoForm.value.vacina || [];
    console.log('IDs das vacinas selecionadas:', selectedVacinas);
  
    const vacinaNomes = selectedVacinas.map((vacina: any) => {
      const vacinaId = vacina.codVacina; 
  
      const vacinaEncontrada = this.vacina.find(v => v.codVacina === vacinaId);
  
      // Retorna o nome da vacina ou "Vacina não encontrada"
      return vacinaEncontrada ? vacinaEncontrada.nome : 'Vacina não encontrada';
    });
  
    // Retorna a lista de vacinas como uma string separada por vírgulas
    return vacinaNomes.join(', ');
  }
  
  
  
  getClinicaNome(): string { // pega o nome da clinca pelo id 
    const clinicaId = this.agendamentoForm.value.clinica;
    const clinica = this.clinicas.find(c => c.codClinica === clinicaId);
    return clinica ? clinica.nome : 'Clínica não encontrada';
  }

  onCheckboxChange(event: any, vacina: Vacina): void { // mostra os id da checkbox e manda pro array de vacina
    console.log('ID da vacina:', vacina.codVacina);
    const vacinaArray = this.vacinaArray;
    if (event.detail.checked) {
      vacinaArray.push(this.fb.control(vacina));
    } else {
      const index = vacinaArray.controls.findIndex(x => x.value.nome === vacina.nome);
      if (index >= 0) {
        vacinaArray.removeAt(index);
      }
    }
  }
  onModalityChange(event: any) {
    this.selectedMode = event.detail.value;
    this.isHomeVisit = this.selectedMode === 'casa';

    if (this.selectedMode === 'casa') {
      this.updateFormValidators(true, false);
    } else if (this.selectedMode === 'clinica') {
      this.updateFormValidators(false, true);
    }

    this.agendamentoForm.patchValue({ modalidade: this.selectedMode });
  }

  updateFormValidators(isHomeVisit: boolean, isClinicRequired: boolean) {
    const formaPagamentoValidators = isHomeVisit ? [Validators.required] : [];
    const clinicaValidators = isClinicRequired ? [Validators.required] : [];

    this.agendamentoForm.controls['formaPagamento'].setValidators(formaPagamentoValidators);
    this.agendamentoForm.controls['clinica'].setValidators(clinicaValidators);

    this.agendamentoForm.controls['formaPagamento'].updateValueAndValidity();
    this.agendamentoForm.controls['clinica'].updateValueAndValidity();
  }

  onPaymentChange(event: any) {
    this.showPaymentMethodLabel = event.detail.value;
    this.agendamentoForm.patchValue({ formaPagamento: this.showPaymentMethodLabel });
  }

  onDateChange(event: any) {
    const selectedDate = event.detail.value;
    console.log('Date changed: ', selectedDate);
    this.agendamentoForm.patchValue({ data: selectedDate });
  }

  onTimeChange(event: any) {
    const selectedTime = event.detail.value;
    console.log('Time changed: ', selectedTime);
    this.agendamentoForm.patchValue({ hora: selectedTime });
  }

  // Função Confirmar
 onConfirm() { //botão de confirmar agendamento e fazer a requisição da API
  console.log('Form values:', this.agendamentoForm.value);

  if (this.agendamentoForm.valid) {
    console.log('Form is valid. Submitting...');

    const agendamento = this.agendamentoForm.value;

    this.agendamentoService.cadastrarAgendamento(agendamento).subscribe(
      response => {
        console.log('Agendamento cadastrado com sucesso:', response);
        this.showConfirmation = true; 
        this.agendamentoForm.reset(); 
      },
      error => {
        console.error('Erro ao cadastrar agendamento:', error);
      }
    );
  } else {
    console.log('Form is invalid. Please correct the following fields:');
  }
}

  onCancel() {
    this.agendamentoForm.reset(); // Reseta o formulário
    console.log('Form has been reset');
    this.showConfirmation = false;// Ajuste o caminho conforme necessário
  }

  onSubmit() {
    this.agendamentoForm.patchValue({
      paciente: this.pacienteId

    });

    if (this.agendamentoForm.valid) {
      console.log('Form submitted with data: ', this.agendamentoForm.value);
      this.showConfirmation = true;


    } else {
      console.log('Form is invalid');
      console.log('Invalid fields:', this.agendamentoForm.controls);
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { arrowBack } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { NavController, AnimationController, IonicModule } from '@ionic/angular';
import { HeaderComponentComponent } from '../../header-component/header-component.component';
import { FooterComponent } from '../../footer/footer.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthLoginService } from 'src/app/core/services/login/auth-login.service';
import { AgendamentoService } from 'src/app/core/services/agendamento.service';

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
  providers: [AuthLoginService, AgendamentoService ]
})
export class FormVacinaEmCasaComponent implements OnInit {
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
    private agendamentoService: AgendamentoService 
  ) {
    addIcons({ arrowBack });

    this.agendamentoForm = this.fb.group({
      modalidade: [null, Validators.required],
      data: [null, Validators.required],
      hora: [null, Validators.required],
      vacina: [null, Validators.required],
      formaPagamento: [null, Validators.required],
      clinica: [null, Validators.required],
      paciente: [null]
    });
  }
  pacienteId: string = this.authService.getUserId();
  ngOnInit() {
    this.clinics = ['Clínica A', 'Clínica B', 'Clínica C'];
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
  onConfirm() {
    console.log('Form values:', this.agendamentoForm.value);
    
    if (this.agendamentoForm.valid) {
      console.log('Form submitted with data: ', this.agendamentoForm.value);
      this.showConfirmation = false;
      this.agendamentoForm.reset();
    } else {
      console.log('Form is invalid');
      console.log('Invalid fields:', this.agendamentoForm.controls);
    }
  }
  
  // Função Cancelar
  onCancel() {
    this.agendamentoForm.reset(); // Reseta o formulário
    console.log('Form has been reset'); 
    this.showConfirmation = false;// Ajuste o caminho conforme necessário
  }
  
  onSubmit() {
    console.log('Form values:', this.agendamentoForm.value);
    this.agendamentoForm.patchValue({
      paciente: this.pacienteId
    });
    
    if (this.agendamentoForm.valid) {
      console.log('Form submitted with data: ', this.agendamentoForm.value);
      this.showConfirmation = true; 
      
      const agendamento = this.agendamentoForm.value;
      this.agendamentoService.cadastrarAgendamento(agendamento);
    } else {
      console.log('Form is invalid');
      console.log('Invalid fields:', this.agendamentoForm.controls);
    }
  }
}
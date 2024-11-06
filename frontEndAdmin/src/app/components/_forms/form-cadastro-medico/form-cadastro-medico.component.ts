import {Router} from "@angular/router"
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputTextListComponent } from '../../_inputs/input-text-list/input-text-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicoService } from 'src/app/core/service/medico.service';
import { MaskDirective } from "../../_inputs/directives/mask.directive";

@Component({
  selector: 'app-form-cadastro-medico',
  templateUrl: './form-cadastro-medico.component.html',
  standalone: true,
  styleUrls: ['./form-cadastro-medico.component.scss'],
  imports: [IonicModule, ReactiveFormsModule, InputTextListComponent, HttpClientModule],
  providers: [MedicoService]
})
export class FormCadastroMedicoComponent  implements OnInit {
  form: FormGroup;

  inputsData = [
    {size: 8, name: 'nome', label: 'Nome do Médico', placeholder: 'Digite o nome', type: "text"},
    {size: 4, name: 'telefone', label: 'Telefone', placeholder: '(00) 00000-0000', type: "text", mask: "telefone"},
    {size: 6, name: 'cpf', label: 'CPF', placeholder: '000.000.000-00', type: "text", mask: "cpf"},
    {size: 6, name: 'crm', label: 'CRM', placeholder: 'CRM/SP 000000', type: "text", mask: "crm"},
    {size: 6, name: 'email', label: 'E-mail', placeholder: 'ex@dominio.com', type: "text"},
    {size: 6, name: 'senha', label: 'Senha', placeholder: 'Insira uma senha forte...', type: "text"},
  ];

  constructor(
    private formBuilder: FormBuilder, 
    private medico: MedicoService, 
    private router: Router
  ) {
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: [null],
      telefone: [null],
      cpf: [null],
      crm: [null],
      email: [null],
      senha: [null],
    });
  }

  onSubmit() {
    this.form.patchValue({
      telefone: MaskDirective.removeMask(this.form.value.telefone, 'telefone'),
      cpf: MaskDirective.removeMask(this.form.value.cpf, 'cpf')
    });
  
    const medico = this.form.value;
    console.log(medico);
    this.medico.cadastrarMedico(medico);
    this.router.navigate(['/super-user/cadastro-clinica']);
  }
}

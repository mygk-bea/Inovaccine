import {Router} from "@angular/router"
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputTextListComponent } from '../../_inputs/input-text-list/input-text-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicoService } from 'src/app/core/service/medico.service';

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
    {size: 8, name: 'nome', label: 'Nome do Médico', placeholder: 'Digite o nome'},
    {size: 4, name: 'telefone', label: 'Telefone', placeholder: '(00) 00000-0000'},
    {size: 6, name: 'cpf', label: 'CPF', placeholder: '000.000.000-00'},
    {size: 6, name: 'crm', label: 'CRM', placeholder: 'CRM/SP 000000'},
    {size: 6, name: 'email', label: 'E-mail', placeholder: 'ex@dominio.com'},
    {size: 6, name: 'senha', label: 'Senha', placeholder: 'Insira uma senha forte...'},
  ];

  constructor(private formBuilder: FormBuilder, private medico: MedicoService, private router: Router) {
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
    const medico = this.form.value;
    console.log(medico);
    this.medico.cadastrarMedico(medico);
    this.router.navigate(['/super-user/cadastro-clinica']);
  }
}

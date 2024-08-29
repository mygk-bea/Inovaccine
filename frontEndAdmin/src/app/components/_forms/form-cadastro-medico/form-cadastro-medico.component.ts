import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputTextListComponent } from '../../input-text-list/input-text-list.component';

@Component({
  selector: 'app-form-cadastro-medico',
  templateUrl: './form-cadastro-medico.component.html',
  standalone: true,
  styleUrls: ['./form-cadastro-medico.component.scss'],
  imports: [IonicModule, ReactiveFormsModule, InputTextListComponent],
})
export class FormCadastroMedicoComponent  implements OnInit {
  form: FormGroup;

  inputsData = [
    {size: 8, name: 'nome', label: 'Nome do Médico', placeholder: 'Digite o nome'},
    {size: 4, name: 'telefone', label: 'Telefone', placeholder: '(00) 00000-0000'},
    {size: 6, name: 'cpf', label: 'CPF', placeholder: '000.000.000-00'},
    {size: 6, name: 'crm', label: 'CRM', placeholder: 'CRM/SP 000000'}
  ];

  constructor(private formBuilder: FormBuilder) {
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: [null],
      telefone: [null],
      cpf: [null],
      crm: [null]
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputTextListComponent } from '../../_inputs/input-text-list/input-text-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FuncionarioService } from 'src/app/core/service/funcionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-cadastro-funcionario',
  templateUrl: './form-cadastro-funcionario.component.html',
  standalone: true,
  styleUrls: ['./form-cadastro-funcionario.component.scss'],
  imports: [IonicModule, ReactiveFormsModule, InputTextListComponent, HttpClientModule],
  providers: [FuncionarioService]
})
export class FormCadastroFuncionarioComponent  implements OnInit {
  form: FormGroup;

  inputsData = [
    {size: 12, name: "nome", label: "Nome do Funcionário", placeholder: "Insira o nome do funcionário..."},
    {size: 6, name: "cpf", label: "CPF", placeholder: "000.000.000-00"},
    {size: 6, name: "telefone", label: "Telefone", placeholder: "(00) 00000-0000"},
    {size: 6, name: "email", label: "E-mail", placeholder: "email@exemplo.com"},
    {size: 6, name: "senha", label: "Senha", placeholder: "Insira uma senha forte..."},
  ];

  constructor(private formBuilder: FormBuilder, private funcionario: FuncionarioService, private router: Router) { 
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: [null],
      cpf: [null],
      telefone: [null],
      email: [null],
      senha: [null],
    });
  }

  onSubmit() {
    const funcionario = this.form.value;
    console.log(funcionario);
    this.funcionario.cadastrarFuncionario(funcionario);
    this.router.navigate(['/clinica/listagem-funcionarios'])
  }
}

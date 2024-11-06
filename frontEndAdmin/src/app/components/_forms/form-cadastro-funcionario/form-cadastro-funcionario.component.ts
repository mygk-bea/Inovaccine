import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputTextListComponent } from '../../_inputs/input-text-list/input-text-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FuncionarioService } from 'src/app/core/service/funcionario.service';
import { Router } from '@angular/router';
import { MaskDirective } from '../../_inputs/directives/mask.directive';

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
    {size: 12, name: "nome", label: "Nome do Funcionário", placeholder: "Insira o nome do funcionário...", type: "text"},
    {size: 6, name: "cpf", label: "CPF", placeholder: "000.000.000-00", type: "text", mask: "cpf"},
    {size: 6, name: "telefone", label: "Telefone", placeholder: "(00) 00000-0000", type: "text", mask: "telefone"},
    {size: 6, name: "email", label: "E-mail", placeholder: "email@exemplo.com", type: "text"},
    {size: 6, name: "senha", label: "Senha", placeholder: "Insira uma senha forte...", type: "text"},
  ];

  constructor(
    private formBuilder: FormBuilder, 
    private funcionario: FuncionarioService, 
    private router: Router
  ) { 
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
    this.form.patchValue({
      cpf: MaskDirective.removeMask(this.form.value.cpf, 'cpf'),
      telefone: MaskDirective.removeMask(this.form.value.telefone, 'telefone'),
    });
  
    const funcionario = this.form.value;
    console.log(funcionario);
    this.funcionario.cadastrarFuncionario(funcionario);
    this.router.navigate(['/clinica/listagem-funcionarios'])
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputTextListComponent } from '../../_inputs/input-text-list/input-text-list.component';
import { ClinicaService } from 'src/app/core/service/clinica.service';
import { HttpClientModule } from '@angular/common/http';
import { InputTimeComponent } from '../../_inputs/input-time/input-time.component';
import { MedicoService } from 'src/app/core/service/medico.service';
import { CommonModule } from '@angular/common';
import { InputSearchCadastroComponent } from '../../_inputs/input-search-cadastro/input-search-cadastro.component';
import { Router } from '@angular/router';
import { MaskDirective } from '../../_inputs/directives/mask.directive';

@Component({
  selector: 'app-form-cadastro-clinica',
  templateUrl: './form-cadastro-clinica.component.html',
  standalone: true,
  styleUrls: ['./form-cadastro-clinica.component.scss'],
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule,
    ReactiveFormsModule, 
    InputTextListComponent, 
    InputTimeComponent, 
    InputSearchCadastroComponent,
    HttpClientModule,
  ],
  providers:[ClinicaService, MedicoService]
})
export class FormCadastroClinicaComponent  implements OnInit {
  form: FormGroup;
  inputValue: string = '';
  showDropdown!: boolean;
  medicoId!: number;

  inputsDataGeral = [
    {size: 12, name: "nome_cli", label: "Nome da Clínica", placeholder: "Insira o nome da clínica", type: "text"},
    {size: 3, name: "cnpj", label: "CNPJ", placeholder: "00.000.000/0000-00", type: "text", mask: "cnpj"},
    {size: 3, name: "telefone", label: "Telefone", placeholder: "(00) 00000-0000", type: "text", mask: "telefone"}
  ];

  inputsDataLogin = [
    {size: 6, name: "email", label: "E-mail", placeholder: "Insira o e-mail da clínica", type: "text"},
    {size: 6, name: "senha", label: "Senha", placeholder: "Insira uma senha forte", type: "text"}
  ];

  inputsDataEndereco = [
    {size: 3, name: "cep", label: "CEP", placeholder: "00000-000", type: "text", mask: "cep"},
    {size: 5, name: "logradouro", label: "Logradouro", placeholder: "ex: Rua...", type: "text"},
    {size: 4, name: "bairro", label: "Bairro", placeholder: "ex: Vila...", type: "text"},
    {size: 3, name: "cidade", label: "Cidade", placeholder: "ex: São...", type: "text"},
    {size: 2, name: "uf", label: "UF", placeholder: "SP", type: "text"},
    {size: 3, name: "numero", label: "Número", placeholder: "00000", type: "text"},
    {size: 4, name: "complemento", label: "Complemento", placeholder: "ex: Casa, Ap...", type: "text"}
  ];

  constructor(
    private formBuilder: FormBuilder, 
    private clinica: ClinicaService, 
    private dadosMedico: MedicoService, 
    private router: Router
  ) { 
    this.form = new FormGroup({});
  }

  pesquisarMedico = (value: string) => {
    return this.dadosMedico.pesquisarMedico(value);
  };

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome_cli: [null],
      nome_medico: [null],
      email: [null],
      senha: [null],
      cnpj: [null],
      telefone: [null],
      hora_inicio: [null],
      hora_fim: [null],
      cep: [null],
      logradouro: [null],
      bairro: [null],
      cidade: [null],
      uf: [null],
      numero: [null],
      complemento: [null]
    });
  }

  onSubmit() {
    this.form.patchValue({
      nome_medico: this.medicoId,
      cnpj: MaskDirective.removeMask(this.form.value.cnpj, 'cnpj'),
      telefone: MaskDirective.removeMask(this.form.value.telefone, 'telefone'),
      cep: MaskDirective.removeMask(this.form.value.cep, 'cep')
    });

    const clinica = this.form.value;
    console.log(clinica);
    this.clinica.cadastrarClinica(clinica);
    this.router.navigate(['/super-user/listagem-clinicas']);
  }
}

import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputTextListComponent } from '../../_inputs/input-text-list/input-text-list.component';
import { VacinaService } from 'src/app/core/service/vacina.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MaskDirective } from '../../_inputs/directives/mask.directive';

@Component({
  selector: 'app-form-cadastro-vacina',
  templateUrl: './form-cadastro-vacina.component.html',
  standalone: true,
  styleUrls: ['./form-cadastro-vacina.component.scss'],
  imports: [IonicModule, CommonModule, ReactiveFormsModule, InputTextListComponent, HttpClientModule],
  providers: [VacinaService]
})
export class FormCadastroVacinaComponent  implements OnInit {
  form: FormGroup;

  inputsData = [
    {size: 6, name: "nome", label: "Nome da Vacina", placeholder: "Insira o nome da vacina...", type: "text"},
    {size: 6, name: "preco", label: "Valor", placeholder: "R$ 000,00", type: "text", mask: "preco"}
  ];

  radioValues = [
    {text: "Entre 0 a 10 anos",   value: "1"},
    {text: "Entre 11 a 19 anos",  value: "2"},
    {text: "Entre 20 a 59 anos",  value: "3"},
    {text: "Período Gestacional", value: "4"},
    {text: "Mais de 60 anos",     value: "5"},
  ];

  checkboxValues = [
    {text: "Segunda-feira", value: "Segunda-feira"},
    {text: "Terça-feira", value:"Terça-feira"},
    {text: "Quarta-feira", value:"Quarta-feira"},
    {text: "Quinta-feira", value:"Quinta-feira"},
    {text: "Sexta-feira", value:"Sexta-feira"},
  ]

  constructor(
    private formBuilder: FormBuilder, 
    private vacina: VacinaService, 
    private router: Router
  ) { 
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome:[null],
      informacao:[null],
      preco:[null],
      periodo:[null],
      diasAplicacao: this.formBuilder.array(this.checkboxValues.map(() => false)) 
    });
  }
  

  onSubmit() {
    this.form.patchValue({
      preco: MaskDirective.removeMask(this.form.value.preco, 'preco'),
    });

    const vacina = this.form.value;
    vacina.diasAplicacao = this.checkboxValues.filter((_, index) => vacina.diasAplicacao[index]).map(option => option.value); 
    console.log(vacina);
    this.vacina.cadastrarVacina(vacina);
    this.router.navigate(['/clinica/listagem-vacinas']);
  }
}

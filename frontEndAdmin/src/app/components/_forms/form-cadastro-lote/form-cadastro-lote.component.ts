import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputTextListComponent } from '../../_inputs/input-text-list/input-text-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoteService } from 'src/app/core/service/lote.service';
import { VacinaService } from 'src/app/core/service/vacina.service';
import { InputSearchCadastroComponent } from '../../_inputs/input-search-cadastro/input-search-cadastro.component';
import { InputDateComponent } from '../../_inputs/input-date/input-date.component';

@Component({
  selector: 'app-form-cadastro-lote',
  templateUrl: './form-cadastro-lote.component.html',
  standalone: true,
  styleUrls: ['./form-cadastro-lote.component.scss'],
  imports: [
    IonicModule, 
    ReactiveFormsModule, 
    InputTextListComponent, 
    InputSearchCadastroComponent, 
    InputDateComponent,
    HttpClientModule
  ],
  providers: [LoteService, VacinaService]
})
export class FormCadastroLoteComponent  implements OnInit {
  form: FormGroup;
  showDropdown!: boolean;
  vacinaId!: number;

  inputsDataLote = [
    {size: 6, name: "codLote", label: "Número do Lote", placeholder: "0000-0000-0000", type: "text"},
    {size: 6, name: "valor", label: "Valor", placeholder: "R$ 00000,00", type: "text"},
    {size: 6, name: "qtd", label: "Quantidade de Vacinas", placeholder: "0000", type: "text"},
    {size: 6, name: "qtd_minimo", label: "Quantidade Min de Vacinas", placeholder: "0000", type: "text"},
  ];

  inputsDataFornecedor = [
    {size: 12, name: "nome", label: "Nome", placeholder: "ex: Instituto...", type: "text"},
    {size: 12, name: "cnpj", label: "CNPJ", placeholder: "00.000.000/0000-00", type: "text"},
    {size: 12, name: "telefone", label: "Telefone", placeholder: "(00) 00000-0000", type: "text"},
  ]

  constructor(private formBuilder: FormBuilder, private lote: LoteService, private dadosVacina: VacinaService) { 
    this.form = new FormGroup({});
  }

  pesquisarVacina = (value: string) => {
    return this.dadosVacina.pesquisarVacina(value);
  };

  ngOnInit() {
    this.form = this.formBuilder.group({
      fk_lote_codVacina: [null],
      codLote: [null],
      valor: [null],
      qtd: [null],
      qtd_minimo: [null],
      dataCompra: [null],
      dataValidade: [null],
      nome: [null],
      telefone: [null],
      cnpj: [null]
    })
  }

  onSubmit() {
    this.form.patchValue({
      fk_lote_codVacina: this.vacinaId
    });
    console.log(this.form.value);
    const lote = this.form.value;
    this.lote.cadastrarLote(lote);
  }
}

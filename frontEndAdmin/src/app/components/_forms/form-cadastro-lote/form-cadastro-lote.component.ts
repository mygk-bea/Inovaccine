import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputTextListComponent } from '../../input-text-list/input-text-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoteService } from 'src/app/core/service/lote.service';
import { FornecedorService } from 'src/app/core/service/fornecedor.service';
import { VacinaService } from 'src/app/core/service/vacina.service';
import { InputSearchCadastroComponent } from '../../input-search-cadastro/input-search-cadastro.component';
import { InputDateComponent } from '../../input-date/input-date.component';

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
  providers: [LoteService, FornecedorService, VacinaService]
})
export class FormCadastroLoteComponent  implements OnInit {
  formLote: FormGroup;
  formFornecedor: FormGroup;
  form: FormGroup;
  showDropdown!: boolean;
  vacinaId!: number;

  inputsDataLote = [
    {size: 6, name: "codLote", label: "Número do Lote", placeholder: "0000-0000-0000"},
    {size: 6, name: "valor", label: "Valor", placeholder: "R$ 00000,00"},
    {size: 6, name: "qtd", label: "Quantidade de Vacinas", placeholder: "0000"},
    {size: 6, name: "qtd_minimo", label: "Quantidade Min de Vacinas", placeholder: "0000"},
  ];

  inputsDataFornecedor = [
    {size: 12, name: "nome", label: "Nome", placeholder: "ex: Instituto..."},
    {size: 12, name: "cnpj", label: "CNPJ", placeholder: "00.000.000/0000-00"},
    {size: 12, name: "telefone", label: "Telefone", placeholder: "(00) 00000-0000"},
  ]

  constructor(private formBuilder: FormBuilder, private lote: LoteService, private fornecedor: FornecedorService, private dadosVacina: VacinaService) { 
    this.formLote = new FormGroup({});
    this.formFornecedor = new FormGroup({});
    this.form = new FormGroup({});
  }

  pesquisarVacina = (value: string) => {
    return this.dadosVacina.pesquisarVacina(value);
  };

  ngOnInit() {
    this.formLote = this.formBuilder.group({
      fk_lote_codVacina: [null],
      codLote: [null],
      valor: [null],
      qtd: [null],
      qtd_minimo: [null],
      dataCompra: [null],
      dataValidade: [null],
    });

    this.formFornecedor = this.formBuilder.group({
      nome: [null],
      telefone: [null],
      cnpj: [null],
    });

    this.form = this.formBuilder.group({
      lote: this.formLote,
      fornecedor: this.formFornecedor
    })
  }

  onSubmit() {
    this.formLote.patchValue({
      fk_lote_codVacina: this.vacinaId
    });
    console.log(this.form.value.lote);
    console.log(this.form.value.fornecedor);
    const lote = this.form.value.lote;
    const fornecedor = this.form.value.fornecedor;
    this.lote.cadastrarLote(lote);
    this.fornecedor.cadastrarFornecedor(fornecedor);
  }
}

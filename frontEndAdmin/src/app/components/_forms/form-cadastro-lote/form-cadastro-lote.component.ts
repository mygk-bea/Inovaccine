import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputTextListComponent } from '../../input-text-list/input-text-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoteService } from 'src/app/core/service/lote.service';
import { FornecedorService } from 'src/app/core/service/fornecedor.service';

@Component({
  selector: 'app-form-cadastro-lote',
  templateUrl: './form-cadastro-lote.component.html',
  standalone: true,
  styleUrls: ['./form-cadastro-lote.component.scss'],
  imports: [IonicModule, ReactiveFormsModule, InputTextListComponent, HttpClientModule],
  providers: [LoteService, FornecedorService]
})
export class FormCadastroLoteComponent  implements OnInit {
  formLote: FormGroup;
  formFornecedor: FormGroup;
  form: FormGroup;

  inputsDataLote = [
    {size: 12, name: "vacina", label: "Vacina", placeholder: "Pesquise o nome da vacina..."},
    {size: 12, name: "codLote", label: "Número do Lote", placeholder: "0000-0000-0000"},
    {size: 6, name: "qtd", label: "Quantidade de Vacinas", placeholder: "0000"},
    {size: 6, name: "valor", label: "Valor", placeholder: "R$ 00000,00"},
  ];

  inputsDataFornecedor = [
    {size: 12, name: "nome", label: "Nome", placeholder: "ex: Instituto..."},
    {size: 12, name: "cnpj", label: "CNPJ", placeholder: "00.000.000/0000-00"},
    {size: 12, name: "telefone", label: "Telefone", placeholder: "(00) 00000-0000"},
  ]

  constructor(private formBuilder: FormBuilder, private lote: LoteService, private fornecedor: FornecedorService) { 
    this.formLote = new FormGroup({});
    this.formFornecedor = new FormGroup({});
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.formLote = this.formBuilder.group({
      valor: [null],
    });
  }

  onSubmit() {

  }
}

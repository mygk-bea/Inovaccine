import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { CampanhaService } from 'src/app/core/service/campanha.service';
import { VacinaService } from 'src/app/core/service/vacina.service';
import { InputSearchCadastroComponent } from '../../_inputs/input-search-cadastro/input-search-cadastro.component';
import { InputDateComponent } from '../../_inputs/input-date/input-date.component';

@Component({
  selector: 'app-modal-form-cadastro-campanha',
  templateUrl: './modal-form-cadastro-campanha.component.html',
  standalone: true,
  styleUrls: ['./modal-form-cadastro-campanha.component.scss'],
  imports: [
    IonicModule,
    ReactiveFormsModule,
    InputSearchCadastroComponent,
    InputDateComponent,
    HttpClientModule
  ],
  providers: [CampanhaService, VacinaService]
})
export class ModalFormCadastroCampanhaComponent  implements OnInit {
  form: FormGroup;
  showDropdown!: boolean;
  vacinaId!: number;

  constructor(private formBuilder: FormBuilder, private campanha: CampanhaService, private dadosVacina: VacinaService) { 
    this.form = new FormGroup({});
  }

  pesquisarVacina = (value: string) => {
    return this.dadosVacina.pesquisarVacina(value);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: [null],
      fk_campanha_codVacina: [null],
      status: [null],
      dataInicio: [null],
      dataFim: [null]
    })
  }

  onSubmit() {
    this.form.patchValue({
      fk_campanha_codVacina: this.vacinaId
    });
    console.log(this.form.value);
    const campanha = this.form.value;
    this.campanha.cadastrarCampanha(campanha);
  }
}

import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputTextListComponent } from '../../input-text-list/input-text-list.component';
import { VacinaService } from 'src/app/core/service/vacina.service';

@Component({
  selector: 'app-form-cadastro-vacina',
  templateUrl: './form-cadastro-vacina.component.html',
  standalone: true,
  styleUrls: ['./form-cadastro-vacina.component.scss'],
  imports: [IonicModule, ReactiveFormsModule, InputTextListComponent, HttpClientModule],
  providers: [VacinaService]
})
export class FormCadastroVacinaComponent  implements OnInit {
  form: FormGroup;

  inputsData = [
    {size: 6, name: "nome", label: "Nome da Vacina", placeholder: "Insira o nome da vacina..."},
    {size: 6, name: "preco", label: "Valor", placeholder: "R$ 000,00"}
  ];

  constructor(private formBuilder: FormBuilder, private vacina: VacinaService) { 
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome:[null],
      informacao:[null],
      preco:[null],
      periodo:[null],
      diasAplicacao:[null]
    });
  }

  onSubmit() {
    const vacina = this.form.value;
    console.log(vacina);
    this.vacina.cadastrarVacina(vacina);
  }
}

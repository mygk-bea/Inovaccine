import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-form-cadastro-medico',
  templateUrl: './form-cadastro-medico.component.html',
  standalone: true,
  styleUrls: ['./form-cadastro-medico.component.scss'],
  imports: [IonicModule, ReactiveFormsModule],
})
export class FormCadastroMedicoComponent  implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: [null],
      cpf: [null],
      crm: [null],
      telefone: [null]
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}

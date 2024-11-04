import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputTextListComponent } from '../../_inputs/input-text-list/input-text-list.component';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  standalone: true,
  styleUrls: ['./form-login.component.scss'],
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    InputTextListComponent
  ]
})
export class FormLoginComponent implements OnInit {
  form: FormGroup;

  @Input() imgPath: string = '';
  @Input() title: string = '';
  @Output() loginData = new EventEmitter<{ email: string; senha: string }>();

  inputsData = [
    { size: 12, name: 'email', label: 'Usuário', placeholder: 'ex: e-mail, nome...', type: "email"},
    { size: 12, name: 'senha', label: 'Senha', placeholder: 'Insira uma senha forte...', type: "password"}
  ];

  constructor(private formBuilder: FormBuilder) {
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email:[null],
      senha:[null]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.loginData.emit(this.form.value);
    }
  }
}

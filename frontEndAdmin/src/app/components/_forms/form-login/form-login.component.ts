import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputTextListComponent } from '../../input-text-list/input-text-list.component';

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
export class FormLoginComponent  implements OnInit {
  form: FormGroup;

  @Input() imgPath: string = '';
  @Input() title: string = '';

  inputsData = [
    {size: 12, name: "usuario", label: "Usuário", placeholder: "ex: e-mail, nome..."},
    {size: 12, name: "senha", label: "Senha", placeholder: "Insira uma senha forte..."}
  ];

  constructor(private formBuilder: FormBuilder) { 
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      usuario:[null],
      senha:[null]
    });
  }

}

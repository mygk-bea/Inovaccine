import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputTextListComponent } from '../../_inputs/input-text-list/input-text-list.component';
import { LoginService } from 'src/app/core/service/login.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  standalone: true,
  styleUrls: ['./form-login.component.scss'],
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    InputTextListComponent,
    HttpClientModule
  ],
  providers: [LoginService]
})
export class FormLoginComponent  implements OnInit {
  form: FormGroup;

  @Input() imgPath: string = '';
  @Input() title: string = '';

  inputsData = [
    {size: 12, name: "email", label: "Usuário", placeholder: "ex: e-mail, nome..."},
    {size: 12, name: "senha", label: "Senha", placeholder: "Insira uma senha forte..."}
  ];

  constructor(private formBuilder: FormBuilder, private login: LoginService, private router: Router) { 
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email:[null],
      senha:[null]
    });
  }

  onSubmit(){
    const login = this.form.value;
    console.log(login);
    this.login.autenticarLogin(login);
    this.router.navigate(['/clinica/home/']);
  }

}

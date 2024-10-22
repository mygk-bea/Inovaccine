import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormLoginComponent } from 'src/app/components/_forms/form-login/form-login.component';
import { LoginService } from 'src/app/core/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule,
    FormLoginComponent
  ]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}

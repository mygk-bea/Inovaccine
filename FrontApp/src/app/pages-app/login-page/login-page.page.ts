import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponentComponent } from 'src/app/components/header-component/header-component.component';
import  {LoginFormComponent} from 'src/app/components/forms/login-form/login-form.component'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponentComponent, IonicModule,LoginFormComponent]
})
export class LoginPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

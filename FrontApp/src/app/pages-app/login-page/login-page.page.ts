import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponentComponent } from 'src/app/components/header-component/header-component.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponentComponent, IonicModule]
})
export class LoginPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

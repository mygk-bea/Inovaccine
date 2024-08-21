import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FormsDefaultComponent } from 'src/app/forms-default/forms-default.component';

@Component({
  selector: 'app-cadastro-medico',
  templateUrl: './cadastro-medico.page.html',
  styleUrls: ['./cadastro-medico.page.scss'],
  standalone: true,
  imports: [HeaderComponent, FormsDefaultComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CadastroMedicoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

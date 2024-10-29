import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cadastro-page',
  templateUrl: './cadastro-page.page.html',
  styleUrls: ['./cadastro-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CadastroPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

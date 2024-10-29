import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-page',
  templateUrl: './cadastro-page.page.html',
  styleUrls: ['./cadastro-page.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule,IonicModule]
})
export class CadastroPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

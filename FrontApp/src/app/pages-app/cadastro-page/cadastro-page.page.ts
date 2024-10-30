import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormCadastroComponent } from 'src/app/components/forms/form-cadastro/form-cadastro.component';

@Component({
  selector: 'app-cadastro-page',
  templateUrl: './cadastro-page.page.html',
  styleUrls: ['./cadastro-page.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule,IonicModule,FormCadastroComponent]
})
export class CadastroPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

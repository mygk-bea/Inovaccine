import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FormVacinaEmCasaComponent } from 'src/app/components/forms/form-vacina-em-casa/form-vacina-em-casa.component';



@Component({
  selector: 'app-vacina-em-casa-page',
  templateUrl: './vacina-em-casa-page.page.html',
  styleUrls: ['./vacina-em-casa-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,FormVacinaEmCasaComponent]
})
export class VacinaEmCasaPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

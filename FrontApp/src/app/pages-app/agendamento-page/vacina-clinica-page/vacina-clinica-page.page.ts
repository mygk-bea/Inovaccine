import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FormVacinaClinicaComponent } from 'src/app/components/forms/form-vacina-clinica/form-vacina-clinica.component';

@Component({
  selector: 'app-vacina-clinica-page',
  templateUrl: './vacina-clinica-page.page.html',
  styleUrls: ['./vacina-clinica-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,FormVacinaClinicaComponent],
})
export class VacinaClinicaPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

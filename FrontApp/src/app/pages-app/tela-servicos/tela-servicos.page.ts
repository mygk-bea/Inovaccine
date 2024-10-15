import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCol, IonContent, IonHeader, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FormDiskDenunciaComponent } from 'src/app/components/forms/form-disk-denuncia/form-disk-denuncia.component';
import { HeaderComponentComponent } from 'src/app/components/header-component/header-component.component';

@Component({
  selector: 'app-tela-servicos',
  templateUrl: './tela-servicos.page.html',
  styleUrls: ['./tela-servicos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,FormDiskDenunciaComponent,HeaderComponentComponent,IonRow,IonCol]
})
export class TelaServicosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

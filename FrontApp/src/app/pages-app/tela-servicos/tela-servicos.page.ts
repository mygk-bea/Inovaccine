import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FormDiskDenunciaComponent } from 'src/app/components/forms/form-disk-denuncia/form-disk-denuncia.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';

@Component({
  selector: 'app-tela-servicos',
  templateUrl: './tela-servicos.page.html',
  styleUrls: ['./tela-servicos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,FormDiskDenunciaComponent,MenuComponent]
})
export class TelaServicosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

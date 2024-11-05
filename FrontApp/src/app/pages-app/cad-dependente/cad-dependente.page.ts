import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FormCadDependeteComponent } from 'src/app/components/forms/form-cad-dependete/form-cad-dependete.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponentComponent } from 'src/app/components/header-component/header-component.component';
@Component({
  selector: 'app-cad-dependente',
  templateUrl: './cad-dependente.page.html',
  styleUrls: ['./cad-dependente.page.scss'],
  standalone: true,
  imports: [ IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,FormCadDependeteComponent,IonicModule,HeaderComponentComponent]
})
export class CadDependentePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

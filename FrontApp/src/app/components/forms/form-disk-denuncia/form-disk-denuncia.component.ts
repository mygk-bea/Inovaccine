import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonCheckbox,
  IonCol,
  IonContent,
  IonIcon,
  IonInput,
  IonRow,
  ModalController, IonItem, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cloudUploadSharp, locationSharp } from 'ionicons/icons';
import { ModalPageComponent } from '../../modals/modal/modal.component';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  selector: 'form-disk-denuncia',
  templateUrl: './form-disk-denuncia.component.html',
  styleUrls: ['./form-disk-denuncia.component.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonContent, IonInput, IonIcon, IonCheckbox, IonButton, ModalPageComponent, IonRow, IonCol, MenuComponent]
})
export class FormDiskDenunciaComponent implements OnInit {
  isAnonymous = false;

  constructor(private modalCtrl: ModalController) {
    addIcons({ locationSharp, cloudUploadSharp });
  }

  ngOnInit() {}

  toggleAnonymous(event: any) {
    this.isAnonymous = event.detail.checked;
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPageComponent
    });
    return await modal.present();
  }
}

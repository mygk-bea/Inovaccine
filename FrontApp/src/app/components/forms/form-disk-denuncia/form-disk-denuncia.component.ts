import { Component, OnInit } from '@angular/core';
import { IonButton, IonCheckbox, IonContent, IonIcon, IonInput, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cloudUploadSharp, locationSharp } from 'ionicons/icons';
import { ModalPageComponent } from '../../modals/modal/modal.component';

@Component({
  selector: 'form-disk-denuncia',
  templateUrl: './form-disk-denuncia.component.html',
  styleUrls: ['./form-disk-denuncia.component.scss'],
  standalone: true,
  imports: [IonContent, IonInput, IonIcon, IonCheckbox, IonButton, ModalPageComponent]
})
export class FormDiskDenunciaComponent implements OnInit {

  constructor(private modalCtrl: ModalController) {
    addIcons({ locationSharp, cloudUploadSharp });
  }

  ngOnInit() {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPageComponent
    });
    return await modal.present();
  }
}

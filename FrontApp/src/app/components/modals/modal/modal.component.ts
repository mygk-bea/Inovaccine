import { Component } from '@angular/core';
import { IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent]
})
export class ModalPageComponent {
  constructor(private modalCtrl: ModalController) {}

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}

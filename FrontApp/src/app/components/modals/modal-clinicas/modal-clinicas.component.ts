import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonIcon,IonList, IonModal, IonLabel, IonItem } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { helpBuoySharp } from 'ionicons/icons';


@Component({
  selector: 'modal-clinicas',
  templateUrl: './modal-clinicas.component.html',
  standalone: true,
  styleUrls: ['./modal-clinicas.component.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonIcon,IonList,IonModal,IonItem,IonLabel]
})
export class ModalClinicasComponent  implements OnInit {

  constructor() {
    addIcons({ helpBuoySharp});
   }

  ngOnInit() {}

}

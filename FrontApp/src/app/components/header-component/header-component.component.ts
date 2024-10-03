import { Component, OnInit } from '@angular/core';
import { IonHeader, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss'],
  standalone:true,
  imports:[IonIcon,IonHeader]
})
export class HeaderComponentComponent  implements OnInit {

  constructor() { 
    addIcons({logOutOutline,personOutline});
  }

  ngOnInit() {}

}

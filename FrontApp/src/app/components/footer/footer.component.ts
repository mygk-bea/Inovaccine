import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { logoInstagram, logoWhatsapp } from 'ionicons/icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone:true,
  imports: [IonicModule]
})
export class FooterComponent  implements OnInit {

  constructor() {
    addIcons({logoInstagram,logoWhatsapp})
   }

  ngOnInit() {}

}

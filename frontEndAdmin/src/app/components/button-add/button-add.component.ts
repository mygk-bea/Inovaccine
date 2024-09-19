import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  standalone: true,
  styleUrls: ['./button-add.component.scss'],
  imports: [IonicModule]
})
export class ButtonAddComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() message!:string;
  @Input() imgPath!:string;
}

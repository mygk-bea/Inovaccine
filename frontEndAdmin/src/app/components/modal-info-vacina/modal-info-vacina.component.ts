import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-modal-info-vacina',
  templateUrl: './modal-info-vacina.component.html',
  standalone: true,
  styleUrls: ['./modal-info-vacina.component.scss'],
  imports: [IonicModule, CommonModule]
})
export class ModalInfoVacinaComponent  implements OnInit {
  @Input() dados: any;
  
  constructor() { }

  ngOnInit() {}

}

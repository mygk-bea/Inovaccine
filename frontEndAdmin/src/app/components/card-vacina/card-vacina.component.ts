import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { VacinaService } from 'src/app/core/service/vacina.service';
import { ModalInfoVacinaComponent } from '../modal-info-vacina/modal-info-vacina.component';

@Component({
  selector: 'app-card-vacina',
  templateUrl: './card-vacina.component.html',
  standalone: true,
  styleUrls: ['./card-vacina.component.scss'],
  imports: [
    IonicModule, 
    CommonModule,
    ModalInfoVacinaComponent
  ]
})
export class CardVacinaComponent  implements OnInit {
  @Input() dados: any;

  constructor() { }

  ngOnInit() {}
}

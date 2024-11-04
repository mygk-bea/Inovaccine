import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-item-campanha',
  templateUrl: './item-campanha.component.html',
  standalone: true,
  styleUrls: ['./item-campanha.component.scss'],
  imports: [
    IonicModule,
    CommonModule
  ],
})
export class ItemCampanhaComponent  implements OnInit {
  @Input() dados: any;

  getStatusText(status: number): string {
    return status === 1 ? 'Ativo' : 'Inativo';
  }

  constructor() { }

  ngOnInit() {}

}

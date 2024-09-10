import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-table-accordion',
  templateUrl: './table-accordion.component.html',
  standalone: true,
  styleUrls: ['./table-accordion.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class TableAccordionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() titlesTable: {name:string}[] = [];
  @Input() dataTable: {value:string}[] = [];
  @Input() infoDataTable: {name:string; value:string}[] = [];
}

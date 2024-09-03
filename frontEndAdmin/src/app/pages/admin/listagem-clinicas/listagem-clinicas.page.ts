import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { TableAccordionComponent } from 'src/app/components/table-accordion/table-accordion.component';

@Component({
  selector: 'app-listagem-clinicas',
  templateUrl: './listagem-clinicas.page.html',
  styleUrls: ['./listagem-clinicas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent, TableAccordionComponent]
})
export class ListagemClinicasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

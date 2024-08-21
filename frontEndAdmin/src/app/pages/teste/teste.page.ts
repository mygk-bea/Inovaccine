import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
  standalone: true,
  imports: [HeaderComponent, IonicModule, CommonModule, FormsModule]
})
export class TestePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

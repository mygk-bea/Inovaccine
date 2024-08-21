import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.scss'],
  imports: [IonicModule, CommonModule]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() pagesMenu: {name:string; route:string}[] = [];
  @Input() backgroundColor:string = '';
}

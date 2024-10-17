import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.scss'],
  imports: [IonicModule, CommonModule, RouterModule]
})
export class HeaderComponent  implements OnInit {
  @Input() pagesMenu: {name:string; route:string}[] = [];
  @Input() backgroundColor:string = '';

  constructor(private router: Router) { }

  ngOnInit() {}
}

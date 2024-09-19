import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  standalone: true,
  styleUrls: ['./button-add.component.scss'],
  imports: [IonicModule]
})
export class ButtonAddComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  redirectButton(route: string) {
    this.router.navigate([route]);
  }

  @Input() message!:string;
  @Input() imgPath!:string;
  @Input() route!:string;
}

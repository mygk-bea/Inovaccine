import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-forms-default',
  templateUrl: './forms-default.component.html',
  standalone: true,
  styleUrls: ['./forms-default.component.scss'],
  imports: [IonicModule, ReactiveFormsModule]
})
export class FormsDefaultComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  // @Input() fields: {label:string}[] = [];
}

// ; placeholder:string; name:string; type:string
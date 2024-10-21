import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  standalone: true,
  styleUrls: ['./input-date.component.scss'],
  imports: [IonicModule, ReactiveFormsModule]
})
export class InputDateComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() name: string = '';
  @Input() label: string = '';
  @Input() formGroup!: FormGroup;

}

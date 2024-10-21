import { CommonModule } from '@angular/common';
import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-input-time',
  templateUrl: './input-time.component.html',
  standalone: true,
  styleUrls: ['./input-time.component.scss'],
  imports: [IonicModule, ReactiveFormsModule, CommonModule]
})
export class InputTimeComponent  implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() name!: string;
  @Input() label!: string;
  @Input() placeholder!: string;

  constructor() { }

  ngOnInit() {}
}

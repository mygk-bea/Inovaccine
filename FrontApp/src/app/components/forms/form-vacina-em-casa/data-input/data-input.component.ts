import { CommonModule } from '@angular/common';
import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.scss'],
  standalone:true,
  imports: [IonicModule, ReactiveFormsModule, CommonModule]
})
export class DataInputComponent  implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() name!: string;
  @Input() label!: string;
  @Input() placeholder!: string;
  constructor() { }

  ngOnInit() {}

}

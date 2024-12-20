import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MaskDirective } from '../directives/mask.directive';

@Component({
  selector: 'app-input-text-list',
  templateUrl: './input-text-list.component.html',
  standalone: true,
  styleUrls: ['./input-text-list.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, IonicModule, MaskDirective],
})
export class InputTextListComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() inputs: {size: number; name: string; label: string; placeholder: string; type: string; mask?: string}[] = [];
  @Input() formGroup!: FormGroup;
}

import { ReactiveFormsModule } from '@angular/forms';

import { DataFormComponent } from './data-form.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    DataFormComponent
  ],
  exports: [
    DataFormComponent
  ]
})
export class DataFormModule { }

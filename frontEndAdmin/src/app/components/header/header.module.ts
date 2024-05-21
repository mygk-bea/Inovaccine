import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    IonicModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
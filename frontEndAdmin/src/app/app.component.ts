import { HttpClientModule } from '@angular/common/http';
import { Component, LOCALE_ID } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, HttpClientModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ]
})
export class AppComponent {
  constructor() {}
}

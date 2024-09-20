import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormVacinaEmCasaComponent } from './form-vacina-em-casa.component';

describe('FormVacinaEmCasaComponent', () => {
  let component: FormVacinaEmCasaComponent;
  let fixture: ComponentFixture<FormVacinaEmCasaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVacinaEmCasaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormVacinaEmCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormVacinaClinicaComponent } from './form-vacina-clinica.component';

describe('FormVacinaClinicaComponent', () => {
  let component: FormVacinaClinicaComponent;
  let fixture: ComponentFixture<FormVacinaClinicaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVacinaClinicaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormVacinaClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormDiskDenunciaComponent } from './form-disk-denuncia.component';

describe('FormDiskDenunciaComponent', () => {
  let component: FormDiskDenunciaComponent;
  let fixture: ComponentFixture<FormDiskDenunciaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDiskDenunciaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormDiskDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

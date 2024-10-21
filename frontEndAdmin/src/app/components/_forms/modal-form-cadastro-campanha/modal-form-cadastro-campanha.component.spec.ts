import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalFormCadastroCampanhaComponent } from './modal-form-cadastro-campanha.component';

describe('ModalFormCadastroCampanhaComponent', () => {
  let component: ModalFormCadastroCampanhaComponent;
  let fixture: ComponentFixture<ModalFormCadastroCampanhaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFormCadastroCampanhaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalFormCadastroCampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

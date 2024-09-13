import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormCadastroFuncionarioComponent } from './form-cadastro-funcionario.component';

describe('FormCadastroFuncionarioComponent', () => {
  let component: FormCadastroFuncionarioComponent;
  let fixture: ComponentFixture<FormCadastroFuncionarioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCadastroFuncionarioComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormCadastroFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

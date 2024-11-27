import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonCheckbox,
  IonCol,
  IonContent,
  IonIcon,
  IonInput,
  IonRow,
  ModalController,
  IonItem,
  IonLabel,
  IonToast,
  IonProgressBar
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cloudUploadSharp, locationSharp,closeCircle } from 'ionicons/icons';
import { ModalPageComponent } from '../../modals/modal/modal.component';
import { MenuComponent } from '../../menu/menu.component';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms'; // Importando os controles de formulário
import { ViaCepService } from 'src/app/core/services/via-cep/via-cep.service';
import { DenunciaService } from 'src/app/core/services/form-disk-denuncia.service';
import { Disk_denuncia } from 'src/app/core/interfaces/disk_denuncia';

@Component({
  selector: 'form-disk-denuncia',
  templateUrl: './form-disk-denuncia.component.html',
  styleUrls: ['./form-disk-denuncia.component.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonContent, IonInput, IonIcon, IonCheckbox, IonButton, IonToast, ModalPageComponent, IonRow, IonCol, MenuComponent, CommonModule, ReactiveFormsModule,IonProgressBar,IonContent],
  providers: [ViaCepService,DenunciaService]
})
export class FormDiskDenunciaComponent implements OnInit {
  isAnonymous = false;
  form: FormGroup;
  isToastOpen = false;
  toastMessage = ''; // Mensagem dinâmica do toast

  constructor(private modalCtrl: ModalController, private ViaCepService: ViaCepService, private denunciaService: DenunciaService) {
    addIcons({ locationSharp, cloudUploadSharp,closeCircle });

    this.form = new FormGroup({
      cep: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      rua: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      nome: new FormControl({ value: '', disabled: this.isAnonymous }, Validators.required),
      anonimato: new FormControl(false, Validators.required),
      descricao: new FormControl('', Validators.required),
      termos: new FormControl(false, Validators.requiredTrue)
    });
  }

  ngOnInit() { }

  // Função para criar uma mensagem dinâmica
  createToastMessage() {
    const invalidFields: string[] = [];  // Definindo explicitamente o tipo como string[]

    // Percorrer todos os campos e verificar quais estão inválidos
    Object.keys(this.form.controls).forEach(field => {
      const control = this.form.get(field);
      if (control && control.invalid && control.touched) {
        invalidFields.push(field);
      }
    });

    // Se houver campos inválidos, cria a mensagem com os nomes dos campos
    if (invalidFields.length > 0) {
      this.toastMessage = `Preencha os seguintes campos: ${invalidFields.join(', ')}`;
    } else if (!this.form.get('termos')?.value) {
      this.toastMessage = 'Você precisa aceitar os termos.';
    } else {
      this.toastMessage = ''; // Caso todos os campos estejam ok e os termos aceitos
    }
  }

  // Função para exibir o Toast
  setOpen() {
    this.isToastOpen = true;

    // Fechar o toast após o tempo especificado (5 segundos)
    setTimeout(() => {
      this.isToastOpen = false;
    }, 3000); // 5000 milissegundos = 5 segundos
  }

  // Função para limpar o endereço
  private limparEndereco() {
    this.form.get('rua')?.setValue('');
    this.form.get('cidade')?.setValue('');
  }

  // Função para controlar o anonimato
  toggleAnonymous(event: any) {
    this.isAnonymous = event.detail.checked;
    if (this.isAnonymous) {
      this.form.get('nome')?.disable();  // Desabilita o campo Nome
    } else {
      this.form.get('nome')?.enable();   // Habilita o campo Nome
    }
  }

  // Função para abrir o modal de confirmação
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPageComponent
    });
    return await modal.present();
  }

  // Função para submeter o formulário
  submitForm() {
    if (this.form.valid && this.form.get('termos')?.value) {
      const formData: Disk_denuncia = this.form.value;

      // Se o anonimato estiver ativado, limpar o campo 'nome'
      if (this.isAnonymous) {
        formData.nome = '';
      }

      console.log(formData);
      this.denunciaService.cadastrarDenuncia(formData);
      // Abre o modal de confirmação
      this.openModal();

    }
     else {
      this.form.markAllAsTouched();
      this.createToastMessage();  // Gera a mensagem do toast

      this.setOpen();  // Exibe o toast com a mensagem gerada
    }
  }

  // Função para buscar o CEP
  onCepInput() {
    const cepValido = this.form.get('cep')?.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cepValido.length === 8) {
      this.ViaCepService.buscarCep(cepValido).subscribe(
        data => {
          if (data.erro) {
            alert('CEP não encontrado.');
            this.limparEndereco();
          } else {
            // Atualiza os dados de endereço
            this.form.get('rua')?.setValue(data.logradouro || '');
            this.form.get('cidade')?.setValue(data.localidade || '');
          }
        },
        error => {
          console.error('Erro na consulta do CEP:', error);
          alert('Erro ao buscar CEP. Tente novamente.');
          this.limparEndereco();
        }
      );
    } else {
      this.limparEndereco();
    }
  }
}

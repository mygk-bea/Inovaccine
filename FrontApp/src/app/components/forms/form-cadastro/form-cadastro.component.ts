import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CadService } from 'src/app/core/services/cadastro/cad-service.service';
import { Paciente } from 'src/app/core/interfaces/paciente';
@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule,IonicModule,HttpClientModule],
  providers: [CadService]
})
export class FormCadastroComponent  implements OnInit {
  etapaAtual: number = 1;
  camposObrigatoriosVazios: string[] = [];

 dados: Paciente = {
      logradouro: '',
      bairro: '',
      cidade: '',
      numero: '',
      uf: '',
      nome: '',
      dataNasc: '',
      cpf: '',
      telefone: '',
      email: '',
      senha: ''
  };

  constructor(private cadService: CadService) { }

  verificarCamposPreenchidos(): boolean {
    this.camposObrigatoriosVazios = [];  // Limpa os erros ao tentar avançar

    if (this.etapaAtual === 1) {
      if (!this.dados.logradouro) this.camposObrigatoriosVazios.push('logradouro');
      if (!this.dados.bairro) this.camposObrigatoriosVazios.push('bairro');
      if (!this.dados.cidade) this.camposObrigatoriosVazios.push('cidade');
      if (!this.dados.numero) this.camposObrigatoriosVazios.push('numero');
      if (!this.dados.uf) this.camposObrigatoriosVazios.push('uf');
      
    } else if (this.etapaAtual === 2) {
      if (!this.dados.nome) this.camposObrigatoriosVazios.push('nome');
      if (!this.dados.dataNasc) this.camposObrigatoriosVazios.push('dataNasc');
      if (!this.dados.cpf) this.camposObrigatoriosVazios.push('cpf');
      if (!this.dados.telefone) this.camposObrigatoriosVazios.push('telefone');

    } else if (this.etapaAtual === 3) {
      if (!this.dados.email) this.camposObrigatoriosVazios.push('email');
      if (!this.dados.senha) this.camposObrigatoriosVazios.push('senha');
    }

    return this.camposObrigatoriosVazios.length === 0;
  }

  avancarEtapa(): void {
    if (this.verificarCamposPreenchidos()) {
      if (this.etapaAtual === 1) {
        this.etapaAtual++;
      } else if (this.etapaAtual === 2) {
        this.etapaAtual++;
      } else if (this.etapaAtual === 3) {
        // Enviar dados para o serviço
        this.cadService.cadastrarUsuario(this.dados).subscribe(
          response => {
            console.log('Cadastro realizado com sucesso!', response);
            alert('Cadastro finalizado com sucesso!');
            // Redirecionar ou resetar os dados se necessário
          },
          error => {
            console.error('Erro ao cadastrar usuário:', error);
            alert('Ocorreu um erro ao cadastrar. Tente novamente.');
          }
        );
      }
    }
  }

  voltarEtapa(): void {
    if (this.etapaAtual > 1) {
      this.etapaAtual--;
    }
  }

  campoEstaVazio(campo: string): boolean {
    return this.camposObrigatoriosVazios.includes(campo);
  }

  ngOnInit() {}

}

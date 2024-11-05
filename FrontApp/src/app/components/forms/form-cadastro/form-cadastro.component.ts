import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CadService } from 'src/app/core/services/cadastro/cad-service.service';
import { Paciente } from 'src/app/core/interfaces/paciente';
import { ViaCepService } from 'src/app/core/services/via-cep/via-cep.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule,IonicModule,HttpClientModule],
  providers: [CadService,ViaCepService],
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
      cep:'',
      nome: '',
      dataNasc: '',
      cpf: '',
      responsavel: false,
      telefone: '',
      email: '',
      senha: ''
  };

  constructor(private cadService: CadService, private ViaCepService: ViaCepService, private router: Router) { }

  onCepInput() {
    const cepValido = this.dados.cep.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cepValido.length === 8) {
      this.ViaCepService.buscarCep(cepValido).subscribe(
        data => {
          if (data.erro) {
            alert('CEP não encontrado.');
            this.limparEndereco();
          } else {
            // Atualiza os dados de endereço do dados
            this.dados.logradouro = data.logradouro || '';
            this.dados.bairro = data.bairro || '';
            this.dados.cidade = data.localidade || '';
            this.dados.uf = data.uf || '';
          }
        },
        error => {
          console.error('Erro na consulta do CEP:', error);
          alert('Erro ao buscar CEP. Tente novamente.');
          this.limparEndereco();
        }
      );
    } else {
      this.limparEndereco(); // Limpa os campos se o CEP não tiver 8 dígitos
    }
  }

  private limparEndereco() {
    this.dados.logradouro = '';
    this.dados.bairro = '';
    this.dados.cidade = '';
    this.dados.uf = '';
  }

  verificarCamposPreenchidos(): boolean {
    this.camposObrigatoriosVazios = [];  // Limpa os erros ao tentar avançar

    if (this.etapaAtual === 1) {
      if (!this.dados.logradouro) this.camposObrigatoriosVazios.push('logradouro');
      if (!this.dados.bairro) this.camposObrigatoriosVazios.push('bairro');
      if (!this.dados.cidade) this.camposObrigatoriosVazios.push('cidade');
      if (!this.dados.numero) this.camposObrigatoriosVazios.push('numero');
      if (!this.dados.uf) this.camposObrigatoriosVazios.push('uf');
      if (!this.dados.cep) this.camposObrigatoriosVazios.push('cep');
      
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
            if (this.dados.responsavel === true) {
              this.router.navigate(['/responsavel']);  
            }else{

              this.router.navigate(['/tela-inicial']);  // Redirecionar para a home se necessário
            }
            // Redirecionar ou resetar os dados se necessário
          },
          error => {
            console.error('Erro ao cadastrar usuário:', error);
            console.log(this.dados);
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

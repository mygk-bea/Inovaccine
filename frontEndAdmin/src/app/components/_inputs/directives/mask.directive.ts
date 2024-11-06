import { Directive, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appMask]',
  standalone: true
})
export class MaskDirective {
  @Input('appMask') maskType!: string;

  constructor(private control: NgControl) {}

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    if (!this.maskType) {
      return;
    }

    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    value = this.applyMask(value);
    this.control.control?.setValue(value, { emitEvent: false });
  }

  applyMask(value: string): string {
    switch (this.maskType) {
      case 'cpf':
        return this.formatCPF(value);
      case 'cnpj':
        return this.formatCNPJ(value);
      case 'telefone':
        return this.formatTelefone(value);
      case 'cep':
        return this.formatCEP(value);
      case 'codigo':
        return this.formatCodigo(value);
      case 'preco':
        return this.formatPreco(value);
      case 'crm':
        return this.formatCRM(value);
      default:
        return value;
    }
  }

  private formatCPF(value: string): string {
    value = value.slice(0, 11);
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  private formatCNPJ(value: string): string {
    value = value.slice(0, 14);
    return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }

  private formatTelefone(value: string): string {
    value = value.slice(0, 11);
    return value.length <= 10
      ? value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
      : value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

  private formatCEP(value: string): string {
    value = value.slice(0, 8);
    return value.replace(/(\d{5})(\d{3})/, '$1-$2');
  }

  private formatCodigo(value: string): string {
    value = value.slice(0, 5);
    return value.replace(/(\d{1})(\d{4})/, '#$1$2');
  }

  private formatPreco(value: string): string {
    const formatted = (parseInt(value) / 100).toFixed(2);
    return 'R$ ' + formatted.replace('.', ',');
  }

  private formatCRM(value: string): string {
    value = value.replace(/\D/g, '');
    const numbersPart = value.slice(0, 6);
    return `${numbersPart}`;
  }

  static removeMask(value: string, maskType: string): string {
    let cleanValue = value.replace(/\D/g, '');
    switch (maskType) {
      case 'cpf':
      case 'cnpj':
      case 'telefone':
      case 'cep':
      case 'codigo':
        return cleanValue; // Apenas retorna os números sem formatação
      case 'preco':
        // Para o preço, remove o 'R$' e formata como decimal
        return cleanValue;
      case 'crm':
        return cleanValue.slice(0, 6); // Apenas os números do CRM
      default:
        return cleanValue;
    }
  }
}
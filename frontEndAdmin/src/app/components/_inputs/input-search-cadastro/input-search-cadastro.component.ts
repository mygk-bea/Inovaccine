import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-input-search-cadastro',
  templateUrl: './input-search-cadastro.component.html',
  standalone: true,
  styleUrls: ['./input-search-cadastro.component.scss'],
  imports: [IonicModule, ReactiveFormsModule, CommonModule]
})
export class InputSearchCadastroComponent  implements OnInit {
  @Input() label:string = '';
  @Input() name:string = '';
  @Input() formGroup!: FormGroup;
  @Input() searchFunction!: (query: string) => any;

  @Output() codigoSelecionado = new EventEmitter<any>(); 

  searchControl = new FormControl('');
  showDropdown: boolean = false;
  datas!: any[];

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.searchControl.valueChanges.subscribe(query => {
      this.onSearch(query);
    });
  }

  onSearch(query: any) {
    if (this.searchFunction) {
      this.searchFunction(query).subscribe(
        (results: any[]) => {
          this.datas = results;
          if(this.datas.length == 0) {
            this.datas = [{"nome": "Pesquisa não encontrada..."}];
          }
          this.showDropdown = true;
        },
        (error: any) => {
          console.error('Erro na busca:', error);
        }
      );
    } else {
      this.showDropdown = false;
    }
  }

  selectValue(item: any) {
    if (item.nome !== 'Pesquisa não encontrada...') {
      const codigo = Object.keys(item).find(key => key.startsWith('cod'));

      if (codigo) {
        this.codigoSelecionado.emit(item[codigo]); 
        this.searchControl.setValue(item.nome); 
      } else {
        console.warn('Código não encontrado no item:', item);
      }

      this.showDropdown = false; 
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.showDropdown = false; // Ocultar o dropdown se clicar fora
    }
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  standalone: true,
  styleUrls: ['./input-search.component.scss'],
  imports: [IonicModule, FormsModule]
})
export class InputSearchComponent  implements OnInit {
  @Input() searchFunction!: (query: string) => any;
  @Output() searchResults = new EventEmitter<any[]>();

  inputValue: string = '';  

  constructor() { }

  ngOnInit() {}

  onSearch(query: string) {
    if (this.searchFunction) {
      this.searchFunction(query).subscribe(
        (results: any[]) => {
          this.searchResults.emit(results);
        },
        (error: any) => {
          console.error('Erro na busca:', error);
        }
      );
    }
  }
}

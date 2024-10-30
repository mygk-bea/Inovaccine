import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CampanhaService } from 'src/app/core/service/campanha.service';

@Component({
  selector: 'app-list-cards-vacina',
  templateUrl: './list-cards-vacina.component.html',
  standalone: true,
  styleUrls: ['./list-cards-vacina.component.scss'],
  imports: [
    IonicModule, 
    CommonModule
  ], 
  providers: [
    CampanhaService
  ]
})
export class ListCardsVacinaComponent  implements OnInit {
  @Input() dados: any;
  dadosCampanha: any;

  constructor(private Campanha: CampanhaService) { }

  ngOnInit() {}

  onSelectVacina(query: string) {
    this.Campanha.listarCampanhaVacina(query).subscribe(
      (response) => {
        this.dadosCampanha = response;
        console.log(this.dadosCampanha)
      },
      (error) => {
        console.error("ERRO: ", error);
      }
    );

  }

}

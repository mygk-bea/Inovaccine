import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CampanhaService } from 'src/app/core/service/campanha.service';
import { ItemCampanhaComponent } from '../item-campanha/item-campanha.component';
import { IonModal } from '@ionic/angular/common';
import { forkJoin } from 'rxjs';
import { LoteService } from 'src/app/core/service/lote.service';

@Component({
  selector: 'app-list-cards-vacina',
  templateUrl: './list-cards-vacina.component.html',
  standalone: true,
  styleUrls: ['./list-cards-vacina.component.scss'],
  imports: [
    IonicModule, 
    CommonModule,
    ItemCampanhaComponent
  ], 
  providers: [
    CampanhaService,
    LoteService
  ]
})
export class ListCardsVacinaComponent  implements OnInit {
  @Input() dados: any;
  @ViewChild(IonModal) modal!: IonModal;
  dadosCampanha: any;
  dadosLotes: any;

  constructor(private Campanha: CampanhaService, private Lotes: LoteService) { }

  ngOnInit() {}

  onSelectVacina(query: string, modal: IonModal) {
    console.log(query)

    forkJoin({
      campanha: this.Campanha.listarCampanhaVacina(query),
      lotes: this.Lotes.listarLote(query)
    }).subscribe(
      ({campanha, lotes}) => {
        this.dadosCampanha = campanha;
        this.dadosLotes = lotes;
        console.log(this.dadosCampanha)
        console.log(this.dadosLotes)
        modal.present();
      },
      (error) => {
        console.error("ERRO: ", error);
      }
    );

  }

}

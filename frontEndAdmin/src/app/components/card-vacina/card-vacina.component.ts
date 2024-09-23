import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { VacinaService } from 'src/app/core/service/vacina.service';

@Component({
  selector: 'app-card-vacina',
  templateUrl: './card-vacina.component.html',
  standalone: true,
  styleUrls: ['./card-vacina.component.scss'],
  imports: [
    IonicModule, CommonModule
  ],
  providers: [VacinaService]
})
export class CardVacinaComponent  implements OnInit {
  dados: any;

  constructor(private dadosVacina: VacinaService) { }

  ngOnInit() {}

  listarDados() {
    this.dadosVacina.listarVacina().subscribe(
      (response) => {
        this.dados = response;
        console.log(this.dados);
      },
      (error) => {console.error("ERRO: ", error);}
    )
  }

  showInfo = false;
}

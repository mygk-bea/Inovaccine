import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ItemCampanhaComponent } from 'src/app/components/item-campanha/item-campanha.component';
import { CommonModule } from '@angular/common';
import { CampanhaService } from 'src/app/core/service/campanha.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    HeaderComponent, 
    RouterModule, 
    CommonModule,
    HttpClientModule,
    ItemCampanhaComponent
  ],
  providers: [
    CampanhaService
  ]
})
export class HomePage implements OnInit {
  dados: any;

  constructor(private dadosCampanha: CampanhaService) {}

  ngOnInit() {
    this.dadosCampanha.listarCampanha().subscribe(
      (response) => {
        this.dados = response.filter((campanha: any) => campanha.status === 1);
        console.log(this.dados);
      },
      (error) => {console.error("ERRO: ", error);}
    )  
  }
}

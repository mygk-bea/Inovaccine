import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-cad-dependete',
  templateUrl: './form-cad-dependete.component.html',
  styleUrls: ['./form-cad-dependete.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class FormCadDependeteComponent  implements OnInit {
  etapaAtual: number = 1;
  constructor() { }

  avancarEtapa(){
    if (this.etapaAtual === 1) {
      this.etapaAtual ++
    }else if(this.etapaAtual === 2){
      console.log("fim")
    }
  }

  voltarEtapa(){
    if (this.etapaAtual > 1) {
      this.etapaAtual--;
    }
  }
  ngOnInit() {}

}

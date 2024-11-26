import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { TableAccordionComponent } from 'src/app/components/table-accordion/table-accordion.component';
import { HttpClientModule } from '@angular/common/http';
import { FuncionarioService } from 'src/app/core/service/funcionario.service';
import { ButtonAddComponent } from 'src/app/components/button-add/button-add.component';
import { InputSearchComponent } from 'src/app/components/_inputs/input-search/input-search.component';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-listagem-funcionarios',
  templateUrl: './listagem-funcionarios.page.html',
  styleUrls: ['./listagem-funcionarios.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule, 
    HeaderComponent, 
    TableAccordionComponent, 
    HttpClientModule, 
    ButtonAddComponent, 
    InputSearchComponent
  ],
  providers: [FuncionarioService]
})
export class ListagemFuncionariosPage implements OnInit {
  dados: any;

  titlesTable = [
    {name:'Código'},
    {name:'Nome'},
    {name:'CPF'},
    {name:'Telefone'},
  ];

  constructor(private dadosFuncionario: FuncionarioService, private authService: AuthService) { }

  pesquisarFuncionario = (value: string) => {
    return this.dadosFuncionario.pesquisarFuncionario(value);
  };

  ngOnInit() {
    const userData = this.authService.getUserData();

    this.dadosFuncionario.listarFuncionario(userData?.id).subscribe(
      (response) => {
        this.dados = response;
        console.log(this.dados);
      },
      (error) => {console.error("ERRO: ", error);}
    )
  }

  onSearchFuncionario(results: any[]) {
    console.log(results);
    this.dados = results;
  }
}

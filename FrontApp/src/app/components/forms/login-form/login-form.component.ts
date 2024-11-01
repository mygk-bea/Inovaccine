import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Login } from 'src/app/core/interfaces/login';
import { AuthLoginService } from 'src/app/core/services/login/auth-login.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  standalone:true,
  imports: [IonicModule,HttpClientModule,FormsModule,CommonModule],
  providers: [AuthLoginService]
})
export class LoginFormComponent  implements OnInit {
  login: Pick<Login, 'email' | 'senha'> = {
    email: '',
    senha: ''
  };
  errorMessage: string | null = null;
  constructor(private router: Router, private authLoginService: AuthLoginService) { }
  Logar() {
    this.authLoginService.autenticarLogin(this.login).subscribe({
      next: (response) => {
        if (response.validado) {
          
          this.router.navigate(['/tela-inicial']); 
        } else {
          // Caso a autenticação falhe, define a mensagem de erro
          this.errorMessage = 'Credenciais inválidas. Tente novamente.';
        }
      },
      error: (err) => {
        // Lida com erros da requisição
        console.error('Erro na requisição:', err);
        this.errorMessage = 'Ocorreu um erro ao tentar logar. Tente novamente.';
      }
    });
  }
  ngOnInit() {}

}

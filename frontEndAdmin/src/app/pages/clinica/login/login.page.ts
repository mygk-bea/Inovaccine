import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormLoginComponent } from 'src/app/components/_forms/form-login/form-login.component';
import { AuthService } from 'src/app/core/service/auth.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule,
    FormLoginComponent,
    HttpClientModule
  ], 
  providers: [AuthService]
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    
  }

  handleLogin(data: { email: string; senha: string }) {
    this.authService.login(data.email, data.senha).subscribe(
      () => {
        const userData = this.authService.getUserData();
        if (userData?.type === 'clinica') {
          this.router.navigate(['/clinica/home']);
        } else {
          console.error('Tipo de usuário incorreto');
        }
      },
      error => console.error('Erro de autenticação:', error)
    );
  }


}

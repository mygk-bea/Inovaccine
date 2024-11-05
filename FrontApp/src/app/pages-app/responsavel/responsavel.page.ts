import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponentComponent } from 'src/app/components/header-component/header-component.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { AuthLoginService } from 'src/app/core/services/login/auth-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-responsavel',
  templateUrl: './responsavel.page.html',
  styleUrls: ['./responsavel.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,HeaderComponentComponent,FooterComponent],
  providers:[AuthLoginService]
})
export class ResponsavelPage implements OnInit {

  userId: string | null = null;
  userName: string | null = null;

  constructor(private authService: AuthLoginService, private router: Router) { }

  ngOnInit() {
    this.userId = this.authService.getUserId();
    console.log(this.userId)
    this.userName = this.authService.getUserName();
  }

  entrarPerfil() {
    if (this.userId) {
      this.router.navigate(['/tela-inicial']);
    } else {
      alert('Usuário não encontrado ou não autenticado.');
    }
  }
}

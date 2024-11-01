import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.scss'],
  imports: [IonicModule, CommonModule, RouterModule]
})
export class HeaderComponent  implements OnInit {
  @Input() pagesMenu: {name:string; route:string}[] = [];
  @Input() backgroundColor:string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onLogout() {
    const userType = this.authService.getUserData()?.type;

    this.authService.logout(); // Limpa os dados da sessão

    if (userType === 'super-user') {
      this.router.navigate(['/super-user/login']);
    } else if (userType === 'clinica') {
      this.router.navigate(['/clinica/login']);
    } else {
      this.router.navigate(['/login']); // Caso para um tipo de usuário desconhecido
    }
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const userType = this.authService.getUserData()?.type;

    if (route.routeConfig?.path?.startsWith('super-user')) {
      if (userType === 'super-user') return true;
      this.router.navigate(['/super-user/login']);
      return false;
    } else if (route.routeConfig?.path?.startsWith('clinica')) {
      if (userType === 'clinica') return true;
      this.router.navigate(['/clinica/login']);
      return false;
    }
    
    // Se não estiver logado ou não corresponder a nenhum tipo, redirecione para login padrão
    this.router.navigate(['/login']);
    return false;
  }
}

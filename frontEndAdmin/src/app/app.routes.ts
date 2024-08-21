import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'teste',
    loadComponent: () => import('./pages/teste/teste.page').then( m => m.TestePage)
  },  {
    path: 'cadastro-medico',
    loadComponent: () => import('./pages/cadastro-medico/cadastro-medico.page').then( m => m.CadastroMedicoPage)
  },

];

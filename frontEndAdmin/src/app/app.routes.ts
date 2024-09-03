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
  // {
  //   path: 'teste',
  //   loadComponent: () => import('./pages/teste/teste.page').then( m => m.TestePage)
  // },
  {
    path: 'cadastro-medico',
    loadComponent: () => import('./pages/admin/cadastro-medico/cadastro-medico.page').then( m => m.CadastroMedicoPage)
  },
  {
    path: 'cadastro-clinica',
    loadComponent: () => import('./pages/admin/cadastro-clinica/cadastro-clinica.page').then( m => m.CadastroClinicaPage)
  },
  {
    path: 'listagem-clinicas',
    loadComponent: () => import('./pages/admin/listagem-clinicas/listagem-clinicas.page').then( m => m.ListagemClinicasPage)
  },


];

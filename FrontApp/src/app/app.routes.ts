import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'vacina-em-casa-page',
    pathMatch: 'full',
  },
  {
    path: 'tela-inicial',
    loadComponent: () => import('./pages-app/tela-inicial/tela-inicial.page').then( m => m.TelaInicialPage)
  },
  {
    path: 'tela-servicos',
    loadComponent: () => import('./pages-app/tela-servicos/tela-servicos.page').then( m => m.TelaServicosPage)
  },
  {
    path: 'agendamento-page',
    loadComponent: () => import('./pages-app/agendamento-page/agendamento-page.page').then( m => m.AgendamentoPagePage)
  },
  {
    path: 'vacina-em-casa-page',
    loadComponent: () => import('./pages-app/agendamento-page/vacina-em-casa-page/vacina-em-casa-page.page').then( m => m.VacinaEmCasaPagePage)
  },  {
    path: 'vacina-clinica-page',
    loadComponent: () => import('./pages-app/agendamento-page/vacina-clinica-page/vacina-clinica-page.page').then( m => m.VacinaClinicaPagePage)
  },

];

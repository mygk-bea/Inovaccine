import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login-page',
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
  },
  {
    path: 'login-page',
    loadComponent: () => import('./pages-app/login-page/login-page.page').then( m => m.LoginPagePage)
  },
  {
    path: 'cadastro-page',
    loadComponent: () => import('./pages-app/cadastro-page/cadastro-page.page').then( m => m.CadastroPagePage)
  },
  {
    path: 'responsavel',
    loadComponent: () => import('./pages-app/responsavel/responsavel.page').then( m => m.ResponsavelPage)
  },
  {
    path: 'cad-dependente',
    loadComponent: () => import('./pages-app/cad-dependente/cad-dependente.page').then( m => m.CadDependentePage)
  },  {
    path: 'carteirinha',
    loadComponent: () => import('./pages-app/carteirinha/carteirinha.page').then( m => m.CarteirinhaPage)
  },
  {
    path: 'meus-agendamentos',
    loadComponent: () => import('./pages-app/meus-agendamentos/meus-agendamentos.page').then( m => m.MeusAgendamentosPage)
  },



];

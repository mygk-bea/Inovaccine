import { Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'clinica/login',
    pathMatch: 'full',
  },
  {
    path:'super-user',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'cadastro-medico',
        loadComponent: () => import('./pages/admin/cadastro-medico/cadastro-medico.page').then( m => m.CadastroMedicoPage),
      },
      {
        path: 'cadastro-clinica',
        loadComponent: () => import('./pages/admin/cadastro-clinica/cadastro-clinica.page').then( m => m.CadastroClinicaPage)
      },
      {
        path: 'listagem-clinicas',
        loadComponent: () => import('./pages/admin/listagem-clinicas/listagem-clinicas.page').then( m => m.ListagemClinicasPage)
      },
    ]
  },
  {
    path: 'super-user/login',
    loadComponent: () => import('./pages/admin/login/login.page').then( m => m.LoginPage)
  },
  {
    path:'clinica',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/clinica/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'cadastro-funcionario',
        loadComponent: () => import('./pages/clinica/cadastro-funcionario/cadastro-funcionario.page').then( m => m.CadastroFuncionarioPage)
      },
      {
        path: 'cadastro-vacina',
        loadComponent: () => import('./pages/clinica/cadastro-vacina/cadastro-vacina.page').then( m => m.CadastroVacinaPage)
      },
      {
        path: 'listagem-funcionarios',
        loadComponent: () => import('./pages/clinica/listagem-funcionarios/listagem-funcionarios.page').then( m => m.ListagemFuncionariosPage)
      },
      {
        path: 'cadastro-lote',
        loadComponent: () => import('./pages/clinica/cadastro-lote/cadastro-lote.page').then( m => m.CadastroLotePage)
      },
      {
        path: 'listagem-vacinas',
        loadComponent: () => import('./pages/clinica/listagem-vacinas/listagem-vacinas.page').then( m => m.ListagemVacinasPage)
      },
      {
        path: 'listagem-campanhas',
        loadComponent: () => import('./pages/clinica/listagem-campanhas/listagem-campanhas.page').then( m => m.ListagemCampanhasPage)
      },
      {
        path: 'listagem-agendamentos',
        loadComponent: () => import('./pages/clinica/listagem-agendamentos/listagem-agendamentos.page').then( m => m.ListagemAgendamentosPage)
      },
    ]
  },
  {
    path: 'clinica/login',
    loadComponent: () => import('./pages/clinica/login/login.page').then( m => m.LoginPage)
  },
];

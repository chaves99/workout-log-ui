import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.routes').then((m) => m.pagesRoutes),
  },
];

import { Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

export const routes: Routes = [
  {
    // Delete
    path: 'auth',
    loadComponent: () =>
      import('./layouts/auth/auth.page').then((m) => m.AuthPage),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login.page').then((m) => m.LoginPage),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/register/register.page').then((m) => m.RegisterPage),
      },
    ],
  },
  {
    path: 'home',
    canActivate:[authGuard],
    loadComponent: () =>
      import('./shared/tabs/tabs.page').then((m) => m.TabsPage),
    children:[
      {
        path: 'play-song',
        loadComponent: () => import('./layouts/play-song/play-song.page').then( m => m.PlaySongPage),
      },
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/login',
  },
];

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
      import('./layouts/accueil/accueil.page').then(
        (m) => m.AccueilPage
      ),
    children:[
      {
        path: 'play-song',
        loadComponent: () =>
          import('./shared/modal/play-song/play-song.page').then(
            (m) => m.PlaySongPage
          ),
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.page').then((m) => m.HomePage).then(
            
          ),
      },
      {
        path: 'playlistes',
        loadComponent: () =>
          import('./pages/playlistes/playlistes.page').then((m) => m.PlaylistesPage).then(),
      },
      {
        path: 'favorite',
        loadComponent: () => import('./pages/favorie/favorie.page').then( m => m.FavoriePage)
      },
      {
        path: 'account',
        loadComponent: () => import('./pages/account/account/account.page').then( m => m.AccountPage)
      },
    
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'auth/login',
  },
];

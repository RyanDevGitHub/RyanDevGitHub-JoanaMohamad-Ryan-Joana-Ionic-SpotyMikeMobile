import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-strorage.service';
import { IToken } from '../interfaces/user';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const localStore = inject(LocalStorageService);

  // Récupère la valeur de l'Observable sous forme de Promise
  const token = (await firstValueFrom(
    localStore.getItem<IToken>('token')
  )) as IToken | null;

  if (!token?.token) {
    router.navigate(['/auth/login']);
    return false;
  }
  return true;
};

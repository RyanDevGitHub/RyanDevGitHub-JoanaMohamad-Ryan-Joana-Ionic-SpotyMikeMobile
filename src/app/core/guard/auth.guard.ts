import { inject } from '@angular/core';
import { CanActivateFn ,Router} from '@angular/router';
import { LocalStorageService } from '../services/local-strorage.service';
import { IToken } from '../interfaces/user';


export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router); 
  const localStore = inject(LocalStorageService);
  const token = await localStore.getItem('token').getValue() as IToken
  if(!token?.access){
    router.navigate(['/auth/login']);
  }
  return token?.access ? true : false;
};

import { IUser, IToken, IAccessToken } from './../interfaces/user';
import { spotytestFirebase } from './spotyTestFirebase.service';
import { getFirestore } from 'firebase/firestore';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequestError, LoginRequestSuccess } from '../interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  private http = inject(HttpClient);
  private route = environment.url_api;
  private firestore = inject(spotytestFirebase);

  constructor() {}

  private user:IUser = {
    role:'user' ,
    isEmailVerified: true,
    email: 'jane.doe@example.com',
    name: 'Jane Doe',
    id: '123456789'
  };

  private token :
  IToken = {
    access:{token:'tokentest',expires:"expireTest"},
    refresh:{token:'tokentestrefresh',expires:"expireTestRefresh"}
    
  };

  login(email: string, password: string):Observable<LoginRequestSuccess|LoginRequestError |any> {
    return this.firestore.getDocumentByField('Users', 'email', email).pipe(
      map(user => {
        if (user) {
          if (user.password === password) {
            return { error:false,token:this.token,user: this.user } as LoginRequestSuccess;
          } else {
            return { message: 'Invalid credentials' } as LoginRequestError;
          }
        } else {
          return { message: 'User not found' } as LoginRequestError;
        }
      }),
      catchError(error => {
        console.error('Error during login:', error);
        return of({ message: 'An error occurred during login' } as LoginRequestError);
      })
    );
  }
  register() {}

  errorRequest(httpError: HttpErrorResponse): Observable<LoginRequestError> {
    return of({ ...httpError.error, error: true });
  }
}

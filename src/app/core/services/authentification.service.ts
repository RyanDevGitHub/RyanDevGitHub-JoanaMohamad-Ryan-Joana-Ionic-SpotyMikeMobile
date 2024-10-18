import { AuthService } from './auth.service';
import { IToken, IUserDataBase } from './../interfaces/user';
import { Firebase } from './firebase.service';
import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequestError, LoginRequestSuccess } from '../interfaces/login';
import { FirebaseError } from 'firebase/app';
import { UserRepositoryService } from './repositories/user-repository.service';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  private firestore = inject(Firebase);
  private auth = inject(AuthService);
  private userRepository = inject(UserRepositoryService);

  constructor() {}
  private token: IToken = { token: '' };
  login(
    email: string,
    password: string
  ): Observable<LoginRequestSuccess | LoginRequestError | any> {
    return this.firestore.getDocumentByField('Users', 'email', email).pipe(
      map((user) => {
        if (user) {
          if (user.password === password) {
            this.auth.signIn(email, password).then((myToken) => {
              this.auth.verifyToken(myToken).then((myVerifyToken: any) => {
                if (myVerifyToken) {
                  this.token.token = myToken;
                }
              });
            });
            return {
              error: false,
              token: this.token,
              user: user,
            } as LoginRequestSuccess;
          } else {
            return { message: 'Invalid credentials' } as LoginRequestError;
          }
        } else {
          return { message: 'User not found' } as LoginRequestError;
        }
      }),
      catchError((error) => {
        console.error('Error during login:', error);
        return of({
          message: 'An error occurred during login',
        } as LoginRequestError);
      })
    );
  }
  register(email: string, password: string, user: IUserDataBase) {
    this.auth
      .signUp(email, password)
      .then((userCredential) => {
        // Inscription réussie
        console.log('Inscription réussie', userCredential);
        user.id = userCredential;
        if (user.artiste?.firstName) user.artiste.id = userCredential;
        this.userRepository.createUser(user);
      })
      .catch((error: FirebaseError) => {
        if (error.code === 'auth/email-already-in-use') {
          console.error(
            "L'adresse email est déjà utilisée par un autre compte."
          );
        } else {
          console.error("Erreur d'inscription:", error.message);
        }
      });
  }

  errorRequest(httpError: HttpErrorResponse): Observable<LoginRequestError> {
    return of({ ...httpError.error, error: true });
  }
}

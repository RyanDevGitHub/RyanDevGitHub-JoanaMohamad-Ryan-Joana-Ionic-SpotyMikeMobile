import { IUser } from './../../core/interfaces/user';
import { Firebase } from '../../core/services/firebase.service';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonAvatar,
} from '@ionic/angular/standalone';
import { AuthentificationService } from 'src/app/core/services/authentification.service';
import { TranslateModule } from '@ngx-translate/core';
import {
  LoginRequestError,
  LoginRequestSuccess,
} from 'src/app/core/interfaces/login';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular/standalone';
import { PasswordLostComponent } from 'src/app/shared/modal/password-lost/password-lost.component';
import { LocalStorageService } from 'src/app/core/services/local-strorage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonAvatar,
    IonIcon,
    IonItem,
    IonList,
    IonTitle,
    IonInput,
    IonHeader,
    IonButton,
    IonToolbar,
    IonContent,
    FormsModule,
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
})
export class LoginPage implements OnInit {
  error = '';
  submitForm = false;

  private localStore = inject(LocalStorageService);
  private router = inject(Router);
  private modalCtl = inject(ModalController);
  private serviceAuth = inject(AuthentificationService);

  form: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor() {}

  ngOnInit() {
    console.log('Init');
  }

  onSubmit() {
    this.error = '';
    if (this.form.valid) {
      this.submitForm = true;
      this.serviceAuth
        .login(this.form.value.email, this.form.value.password)
        .subscribe((data: any | LoginRequestError | LoginRequestSuccess) => {
          if (data.error) {
            this.error = 'Identifiants incorrects';
          } else {
            // Add LocalStorage User
            this.localStore.setItem('user', data.user);
            setTimeout(() => {
              console.log(data.token);

              // Add LocalStorage Token
              this.localStore.setItem('token', data.token);

              // Navigate to home/home
              this.router.navigate(['home/home']);
            }, 3000);
          }
        });
    }
  }

  async onPasswordLostModal() {
    const modal = await this.modalCtl.create({
      component: PasswordLostComponent,
    });
    modal.present();
  }
}

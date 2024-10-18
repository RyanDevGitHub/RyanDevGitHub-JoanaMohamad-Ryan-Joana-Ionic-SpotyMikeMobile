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
  IonRouterOutlet,
  IonImg,
  IonGrid,
  IonRow,
} from '@ionic/angular/standalone';

import { TranslateModule } from '@ngx-translate/core';
import { BackButtonComponent } from 'src/app/shared/components/button/back-button/back-button.component';

@Component({
  selector: 'app-login',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [
    IonRow,
    IonGrid,
    IonImg,
    IonRouterOutlet,
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
    BackButtonComponent,
  ],
})
export class AuthPage implements OnInit {
  error = '';
  ngOnInit() {}
}

import { LoginPage } from './../../../pages/login/login.page';
import { Component, OnInit } from '@angular/core';
import { IonNav, IonBackButton, IonToolbar, IonButtons, IonTitle, IonIcon } from "@ionic/angular/standalone";
import { chevronBackOutline } from 'ionicons/icons'; 
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  standalone: true,
  styleUrls: ['./back-button.component.scss'],
  imports: [IonIcon, IonTitle, IonButtons, IonToolbar, IonBackButton, IonNav,LoginPage ],
})
export class BackButtonComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log('start');
    addIcons({ chevronBackOutline });
  }
}

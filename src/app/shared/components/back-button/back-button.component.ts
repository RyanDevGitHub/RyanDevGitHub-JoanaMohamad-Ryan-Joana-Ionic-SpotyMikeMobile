import { LoginPage } from './../../../pages/login/login.page';
import { Component, OnInit, inject } from '@angular/core';
import { IonNav, IonBackButton, IonToolbar, IonButtons, IonTitle, IonIcon, ModalController, IonModal, IonButton } from "@ionic/angular/standalone";
import { chevronBackOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Platform } from '@ionic/angular/standalone';



@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  standalone: true,
  styleUrls: ['./back-button.component.scss'],
  imports: [IonModal, IonIcon, IonTitle, IonButtons, IonToolbar, IonBackButton, IonNav, LoginPage, IonButton],
})
export class BackButtonComponent implements OnInit {
  constructor(private modalCtrl: ModalController,private platform: Platform) { 
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
    });
  

  }
  ngOnInit() {
    addIcons({ chevronBackOutline });
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}

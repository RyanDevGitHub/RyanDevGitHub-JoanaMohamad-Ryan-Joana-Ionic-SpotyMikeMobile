import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCol, IonContent, IonGrid, IonHeader, IonRow, IonTitle, IonToolbar, IonText, IonIcon } from '@ionic/angular/standalone';
import { BackButtonComponent } from 'src/app/shared/components/back-button/back-button.component';
import { ProfileItemComponent } from 'src/app/shared/components/profile-item/profile-item.component';
import { addIcons } from 'ionicons';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import { Isetting } from 'src/app/core/interfaces/setting';
import { Router } from '@angular/router';
import { LogOutComponent } from 'src/app/shared/components/button/log-out/log-out.component';
import { HeaderSettingComponent } from 'src/app/shared/components/header-setting/header-setting.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings-menu.page.html',
  styleUrls: ['./settings-menu.page.scss'],
  standalone: true,
  imports: [IonIcon, IonText, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonCol, IonRow, BackButtonComponent, ProfileItemComponent, LogOutComponent, HeaderSettingComponent]
})
export class SettingsMenuPage implements OnInit {

  private router = inject(Router);
  settings: Isetting[] = [
    { name: 'Account', redirect: '/home/account' },
    { name: 'Languages', redirect: '/home/languages' },
    { name: 'Notification', redirect: '/home/notification' },
    { name: 'About', redirect: '/home/about' },

  ]
  constructor() { }


  ngOnInit() {
    addIcons({ chevronForwardOutline });
  }

  redirect(path: string) {
    this.router.navigate([path])
  }



}

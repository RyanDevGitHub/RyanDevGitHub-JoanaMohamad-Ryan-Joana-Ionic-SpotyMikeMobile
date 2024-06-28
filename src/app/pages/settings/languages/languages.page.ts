import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonText,
  IonModal,
  IonButton,
  IonList,
  IonItem,
  IonAvatar,
  IonImg,
  IonLabel,
} from '@ionic/angular/standalone';
import { HeaderSettingComponent } from 'src/app/shared/components/header-setting/header-setting.component';
import { addIcons } from 'ionicons';
import { chevronForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.page.html',
  styleUrls: ['./languages.page.scss'],
  standalone: true,
  imports: [
    IonText,
    IonIcon,
    IonCol,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderSettingComponent,
    IonBackButton,
    IonGrid,
    IonRow,
    IonModal,
    IonButton,
    IonList,
    IonItem,
    IonAvatar,
    IonImg,
    IonLabel,
  ],
})
export class LanguagesPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  constructor() {}

  ngOnInit() {
    addIcons({ chevronForwardOutline });
  }

  openModal() {}

  closeModal() {
    this.modal.dismiss(null, 'cancel');
  }
}

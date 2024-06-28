import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicComponentsModule } from '../../shared/ionic-components.module'; 
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonButton,
  IonBackButton,
  IonItem, 
  IonLabel,
  IonInput,
} from '@ionic/angular';
import { MusicContainerComponent } from './../../shared/components/music-container/music-container.component';
import { PlaylistContainerComponent } from 'src/app/shared/components/playlist-container/playlist-container.component';
import { HeaderCategoryComponent } from 'src/app/shared/components/header-category/header-category.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicComponentsModule, 
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonAvatar,
    IonGrid,
    IonRow,
    IonCol,
    IonButtons,
    IonButton,
    IonBackButton,
    IonItem,
    IonLabel,
    IonInput,
    MusicContainerComponent,
    PlaylistContainerComponent,
    HeaderCategoryComponent,
  ],
})
export class EditProfilPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}

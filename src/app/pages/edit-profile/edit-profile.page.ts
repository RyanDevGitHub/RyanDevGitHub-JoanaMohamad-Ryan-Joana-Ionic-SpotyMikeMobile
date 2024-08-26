import { MusicContainerComponent } from '../../shared/components/containers/music-container/music-container.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCol,
  IonRow,
  IonItem,
  IonInput,
} from '@ionic/angular/standalone';
import { PlaylistContainerComponent } from 'src/app/shared/components/containers/playlist-container/playlist-container.component';
import { HeaderSettingComponent } from 'src/app/shared/components/headers/header-setting/header-setting.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    MusicContainerComponent,
    PlaylistContainerComponent,
    HeaderSettingComponent,
    IonAvatar,
    IonRow,
    IonItem,
    IonInput,
  ],
})
export class EditProfilPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}

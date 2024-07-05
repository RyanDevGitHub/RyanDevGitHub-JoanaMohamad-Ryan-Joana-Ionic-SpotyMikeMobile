import { MusicContainerComponent } from '../../shared/components/containers/music-container/music-container.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { PlaylistContainerComponent } from 'src/app/shared/components/containers/playlist-container/playlist-container.component';
import { HeaderCategoryComponent } from 'src/app/shared/components/headers/header-category/header-category.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    MusicContainerComponent,
    PlaylistContainerComponent,
    HeaderCategoryComponent,
  ],
})
export class EditProfilPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}

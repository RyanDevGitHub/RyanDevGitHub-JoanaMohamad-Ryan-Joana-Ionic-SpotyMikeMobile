import { LyricsBoxComponent } from './../../components/lyrics-box/lyrics-box.component';
import { MusicNavBarComponent } from './../../components/music-nav-bar/music-nav-bar.component';
import { ShareSongComponent } from './../../components/share-song/share-song.component';
import { LikeSongComponent } from './../../components/like-song/like-song.component';
import { SongOptionComponent } from './../../components/song-option/song-option.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButton, IonButtons, IonBackButton, IonImg, IonModal } from '@ionic/angular/standalone';
import { personCircleOutline, searchOutline } from 'ionicons/icons';
import { SearchButtonComponent } from 'src/app/shared/components/search-button/search-button.component';
import { BackButtonComponent } from '../../components/back-button/back-button.component';

@Component({
  selector: 'app-play-song',
  templateUrl: './play-song.page.html',
  styleUrls: ['./play-song.page.scss'],
  standalone: true,
  imports: [IonModal, IonImg, IonBackButton, IonButtons, 
    IonButton,
    IonIcon,
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    SearchButtonComponent,
    BackButtonComponent,
    SongOptionComponent,
    LikeSongComponent,
    ShareSongComponent,
    MusicNavBarComponent,
    LyricsBoxComponent,IonModal
  ],
})
export class PlaySongPage implements OnInit {
 

  constructor() {
  }

  ngOnInit() {
    addIcons({ searchOutline, personCircleOutline });
  }

}

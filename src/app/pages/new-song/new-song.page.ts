import { IMusic } from './../../core/interfaces/music';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { HeaderCategoryComponent } from 'src/app/shared/components/headers/header-category/header-category.component';
import { DisplayItemComponent } from 'src/app/shared/components/display-item/display-item.component';
import { IPlaylist } from 'src/app/core/interfaces/playlistes';
import { Subscription } from 'rxjs';
import { ModalStateService } from 'src/app/core/services/modal-state.service';
import { Store } from '@ngrx/store';
import { selectRecentSongs } from 'src/app/core/store/selector/song.selector';
import { AppState } from '@capacitor/app';
import { loadSong } from 'src/app/core/store/action/song.action';

@Component({
  selector: 'app-new-song',
  templateUrl: './new-song.page.html',
  styleUrls: ['./new-song.page.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderCategoryComponent,
    DisplayItemComponent,
  ],
})
export class NewSongPage implements OnInit {
  public listPlaylistes: IPlaylist[] = [];
  //  [
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '2',
  //   },
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '1',
  //   },
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '3',
  //   },
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '4',
  //   },
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '5',
  //   },
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '7',
  //   },
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '6',
  //   },
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '8',
  //   },
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'TEST',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '8',
  //   },
  // ];

  public isModalOpen: boolean;
  private modalSubscription: Subscription;
  store = inject(Store<AppState>);
  songs: IMusic[] = [];
  constructor(private modalStateService: ModalStateService) {
    this.modalSubscription = modalStateService.modalOpen$.subscribe(
      (value) => (this.isModalOpen = value)
    );
  }

  ngOnInit() {
    console.log('[HOME] Dispatching loadSong action...');
    this.store.dispatch(loadSong());

    this.store.select(selectRecentSongs).subscribe({
      next: (songs) => {
        console.log('[DEBUG] Recent Songs in subscription:', songs);
        this.songs = songs; // Doit être un tableau
      },
      error: (err) => {
        console.error('[DEBUG] Error in subscription:', err);
      },
    });
  }
}

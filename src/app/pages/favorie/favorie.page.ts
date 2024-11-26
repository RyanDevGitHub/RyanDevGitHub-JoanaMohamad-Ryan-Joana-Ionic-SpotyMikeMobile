import { IFavorite } from './../../core/interfaces/favorites';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCol,
  IonRow,
  IonImg,
} from '@ionic/angular/standalone';
import { PlaylistesOptionComponent } from 'src/app/shared/components/button/playlistes-option/playlistes-option.component';
import { LikeSongComponent } from 'src/app/shared/components/button/like-song/like-song.component';
import { ShareSongComponent } from 'src/app/shared/components/button/share-song/share-song.component';
import { ModalController } from '@ionic/angular/standalone';
import { PlaySongPage } from 'src/app/shared/modal/play-song/play-song.page';
import { SongOptionComponent } from 'src/app/shared/components/button/song-option/song-option.component';
import { HeaderCategoryComponent } from 'src/app/shared/components/headers/header-category/header-category.component';
import { Subscription } from 'rxjs';
import { ModalStateService } from 'src/app/core/services/modal-state.service';

@Component({
  selector: 'app-favorie',
  templateUrl: './favorie.page.html',
  styleUrls: ['./favorie.page.scss'],
  standalone: true,
  imports: [
    IonImg,
    IonRow,
    IonCol,
    IonGrid,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    PlaylistesOptionComponent,
    LikeSongComponent,
    ShareSongComponent,
    PlaySongPage,
    SongOptionComponent,
    HeaderCategoryComponent,
  ],
})
export class FavoriePage implements OnInit, OnDestroy {
  public isModalOpen: boolean;
  private modalSubscription: Subscription;
  constructor(
    private modalCtrl: ModalController,
    private modalStateService: ModalStateService
  ) {
    this.modalSubscription = modalStateService.modalOpen$.subscribe(
      (value) => (this.isModalOpen = value)
    );
  }

  public listFavorite: IFavorite[];
  // = [
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '56',
  //   },
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '54',
  //   },
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '53',
  //   },
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '444',
  //   },
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '24',
  //   },
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '645',
  //   },
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '744',
  //   },
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '8488',
  //   },
  // ];

  ngOnInit() {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: PlaySongPage,
    });
    modal.present();
  }

  ngOnDestroy() {
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
  }
}

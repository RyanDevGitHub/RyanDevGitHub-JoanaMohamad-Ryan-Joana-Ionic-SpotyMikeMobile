import { Component, OnInit, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonRouterOutlet,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { HeaderCategoryComponent } from 'src/app/shared/components/headers/header-category/header-category.component';
import { ActivatedRoute } from '@angular/router';
import { DisplayItemComponent } from 'src/app/shared/components/display-item/display-item.component';
import { LikeSongComponent } from 'src/app/shared/components/button/like-song/like-song.component';
import { ShareSongComponent } from 'src/app/shared/components/button/share-song/share-song.component';
import { SongOptionComponent } from 'src/app/shared/components/button/song-option/song-option.component';
import { IFavorite } from 'src/app/core/interfaces/favorites';
import { PlaySongPage } from 'src/app/shared/modal/play-song/play-song.page';
import { Subscription } from 'rxjs';
import { ModalStateService } from 'src/app/core/services/modal-state.service';
import { ModalController } from '@ionic/angular/standalone';      

@Component({
  selector: 'app-music-genre',
  templateUrl: './music-genre.page.html',
  styleUrls: ['./music-genre.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderCategoryComponent,
    DisplayItemComponent,
    IonCol,
    IonImg,
    IonRow,
    LikeSongComponent,
    ShareSongComponent,
    IonGrid,
    SongOptionComponent
  ],
})
export class MusicGenrePage implements OnInit {
  genre: string;
  // route = inject(ActivatedRoute)
  public isModalOpen: boolean;
  private modalSubscription: Subscription;
  constructor(private route: ActivatedRoute, private modalCtrl: ModalController,
    private modalStateService: ModalStateService) {
    this.modalSubscription = modalStateService.modalOpen$.subscribe(
      (value) => (this.isModalOpen = value)
    );
  }

  public listFavorite: IFavorite[] = [
    {
      cover: 'assets/avatar/album-photo.jpg',
      title: 'Work Instrument',
      artist: 'NamaUser',
      nbSong: '20',
      id: '56',
    },
    {
      cover: 'assets/avatar/album-photo.jpg',
      title: 'Work Instrument',
      artist: 'NamaUser',
      nbSong: '20',
      id: '54',
    },
    {
      cover: 'assets/avatar/album-photo.jpg',
      title: 'Work Instrument',
      artist: 'NamaUser',
      nbSong: '20',
      id: '53',
    },
    {
      cover: 'assets/avatar/album-photo.jpg',
      title: 'Work Instrument',
      artist: 'NamaUser',
      nbSong: '20',
      id: '444',
    },
    {
      cover: 'assets/avatar/album-photo.jpg',
      title: 'Work Instrument',
      artist: 'NamaUser',
      nbSong: '20',
      id: '24',
    },
    {
      cover: 'assets/avatar/album-photo.jpg',
      title: 'Work Instrument',
      artist: 'NamaUser',
      nbSong: '20',
      id: '645',
    },
    {
      cover: 'assets/avatar/album-photo.jpg',
      title: 'Work Instrument',
      artist: 'NamaUser',
      nbSong: '20',
      id: '744',
    },
    {
      cover: 'assets/avatar/album-photo.jpg',
      title: 'Work Instrument',
      artist: 'NamaUser',
      nbSong: '20',
      id: '8488',
    },
  ];

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.genre = params['genre'];
    });
  }

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

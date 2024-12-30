import { IFavorite } from './../../core/interfaces/favorites';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
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
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { selectFavoriteSongsByUser } from 'src/app/core/store/selector/song.selector';
import { IMusic } from 'src/app/core/interfaces/music';
import {
  loadSong,
  loadSongSuccess,
} from 'src/app/core/store/action/song.action';
import { selectUser } from 'src/app/core/store/selector/user.selector';
import { loadUser } from 'src/app/core/store/action/user.action';
import { selectAllSongs } from 'src/app/core/store/reducer/song.reducer';

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
  store = inject(Store<AppState>);
  constructor(
    private modalCtrl: ModalController,
    private modalStateService: ModalStateService
  ) {
    this.modalSubscription = modalStateService.modalOpen$.subscribe(
      (value) => (this.isModalOpen = value)
    );
  }

  public listFavorite: IMusic[];

  ngOnInit() {
    this.store.select(selectFavoriteSongsByUser).subscribe({
      next: (songs) => {
        console.log('[DEBUG] TopsSongs in subscription:', songs);
        this.listFavorite = songs; // Doit être un tableau
      },
      error: (err) => {
        console.error('[DEBUG] Error in subscription:', err);
      },
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

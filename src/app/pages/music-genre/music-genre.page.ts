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
import { AppState } from '@capacitor/app';
import { Store } from '@ngrx/store';
import { selectSongsByGenre } from 'src/app/core/store/selector/song.selector';
import { IMusic, MusicGenre } from 'src/app/core/interfaces/music';
import { MusicContainerComponent } from 'src/app/shared/components/containers/music-container/music-container.component';
import { loadSong } from 'src/app/core/store/action/song.action';

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
    SongOptionComponent,
    MusicContainerComponent,
  ],
})
export class MusicGenrePage implements OnInit {
  genre: MusicGenre;
  // route = inject(ActivatedRoute)
  public isModalOpen: boolean;
  private modalSubscription: Subscription;
  store = inject(Store<AppState>);
  songs: IMusic[] = [];
  constructor(
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
    private modalStateService: ModalStateService
  ) {
    this.modalSubscription = modalStateService.modalOpen$.subscribe(
      (value) => (this.isModalOpen = value)
    );
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.genre = params['genre'];
    });

    console.log('[HOME] Dispatching loadSong action...');
    this.store.dispatch(loadSong());
    this.store.select(selectSongsByGenre(this.genre)).subscribe({
      next: (songs) => {
        console.log('[DEBUG] Songs Genre in subscription:', songs);
        this.songs = songs; // Doit être un tableau
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

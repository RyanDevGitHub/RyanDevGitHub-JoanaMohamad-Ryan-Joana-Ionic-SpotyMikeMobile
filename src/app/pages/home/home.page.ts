import {
  debugSelectAllSongs,
  selectMusicState,
} from 'src/app/core/store/selector/song.selector';
import { loadSong } from 'src/app/core/store/action/song.action';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { book, home } from 'ionicons/icons';
import { TopSongComponent } from 'src/app/shared/components/homeComponent/new-song/new-song.component';
import { MusicGenresComponent } from 'src/app/shared/components/homeComponent/music-genres/music-genres.component';
import { TopSongsComponent } from 'src/app/shared/components/homeComponent/top-songs/top-songs.component';
import { LastPlayedComponent } from 'src/app/shared/components/homeComponent/last-played/last-played.component';
import { ModalStateService } from 'src/app/core/services/modal-state.service';
import { SearchBarComponent } from 'src/app/shared/components/homeComponent/search-bar/search-bar.component';
import { SongRepositoryService } from 'src/app/core/services/repositories/song-repository.service'; // Assurez-vous du bon chemin
import { IMusic } from 'src/app/core/interfaces/music';
import { defaultIfEmpty, filter, Observable, Subscription } from 'rxjs';
import { AppState } from '@capacitor/app';
import { Store } from '@ngrx/store';
import {
  adapter,
  selectAllSongs,
  SongState,
} from 'src/app/core/store/reducer/song.reducer';

@Component({
  selector: 'app-home-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TopSongComponent,
    MusicGenresComponent,
    TopSongsComponent,
    LastPlayedComponent,
    SearchBarComponent,
  ],
})
export class HomePage implements OnInit, OnDestroy {
  store = inject(Store<AppState>);
  public isModalOpen: boolean;
  private modalSubscription: Subscription;
  songs: IMusic[] = [];
  constructor(private modalStateService: ModalStateService) {
    addIcons({ book, home });
    this.modalSubscription = modalStateService.modalOpen$.subscribe(
      (value) => (this.isModalOpen = value)
    );
  }

  ngOnInit() {
    console.log('[HOME] Dispatching loadSong action...');
    this.store.dispatch(loadSong());

    this.store.select(debugSelectAllSongs).subscribe({
      next: (songs) => {
        console.log('[DEBUG] Songs in subscription:', songs);
        this.songs = songs; // Doit être un tableau
      },
      error: (err) => {
        console.error('[DEBUG] Error in subscription:', err);
      },
    });
  }

  ngOnDestroy() {
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
  }
}

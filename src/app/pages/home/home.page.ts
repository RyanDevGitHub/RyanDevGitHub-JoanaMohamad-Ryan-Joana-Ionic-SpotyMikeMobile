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
import { Subscription } from 'rxjs';
import { SearchBarComponent } from 'src/app/shared/components/homeComponent/search-bar/search-bar.component';
import { AppState } from 'src/app/core/store/app.state';
import { loadSong } from 'src/app/core/store/action/song.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    IonHeader,
    IonTitle,
    IonToolbar,
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
  public isModalOpen: boolean;
  private modalSubscription: Subscription;
  store = inject(Store<AppState>);
  constructor(private modalStateService: ModalStateService) {
    this.store.dispatch(loadSong());
    addIcons({ book, home });
    this.modalSubscription = modalStateService.modalOpen$.subscribe(
      (value) => (this.isModalOpen = value)
    );
  }
  public listSongs: object[] = [
    {
      cover: 'assets/avatar/album-photo.jpg',
      artistName: 'Artiste',
      title: 'Titre',
    },
    {
      cover: 'assets/avatar/album-photo.jpg',
      artistName: 'Artiste',
      title: 'Titre',
    },
    {
      cover: 'assets/avatar/album-photo.jpg',
      artistName: 'Artiste',
      title: 'Titre',
    },
    {
      cover: 'assets/avatar/album-photo.jpg',
      artistName: 'Artiste',
      title: 'Titre',
    },
    {
      cover: 'assets/avatar/album-photo.jpg',
      artistName: 'Artiste',
      title: 'Titre',
    },
    {
      cover: 'assets/avatar/album-photo.jpg',
      artistName: 'Artiste',
      title: 'Titre',
    },
    {
      cover: 'assets/avatar/album-photo.jpg',
      artistName: 'Artiste',
      title: 'Titre',
    },
    {
      cover: 'assets/avatar/album-photo.jpg',
      artistName: 'Artiste',
      title: 'Titre',
    },
  ];

  ngOnInit() {
    console.log('init home');

    console.log(this.isModalOpen);
  }

  ngOnDestroy() {
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
  }
}

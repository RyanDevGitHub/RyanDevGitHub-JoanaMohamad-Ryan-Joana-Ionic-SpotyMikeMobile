import { AppState } from './../../core/store/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit, inject } from '@angular/core';
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
  IonText,
} from '@ionic/angular/standalone';
import { ResearchComponent } from 'src/app/shared/components/research/research.component';
import { IPlaylist } from 'src/app/core/interfaces/playlistes';
import { PlaylistContainerComponent } from 'src/app/shared/components/containers/playlist-container/playlist-container.component';
import { ModalStateService } from 'src/app/core/services/modal-state.service';
import { Observable, Subscription } from 'rxjs';
import { IMusic } from 'src/app/core/interfaces/music';
import { MusicContainerComponent } from 'src/app/shared/components/containers/music-container/music-container.component';
import { IArtist } from 'src/app/core/interfaces/user';
import { IArtistContainer } from 'src/app/core/interfaces/artist';
import { ArtistContainerComponent } from 'src/app/shared/components/containers/artist-container/artist-container.component';
import { selectSongsBySearchTerm } from 'src/app/core/store/selector/song.selector';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [
    IonText,
    IonRow,
    IonCol,
    IonGrid,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ResearchComponent,
    PlaylistContainerComponent,
    MusicContainerComponent,
    ArtistContainerComponent,
  ],
})
export class SearchPage implements OnInit {
  public artistLists: IArtistContainer[] = [];
  // = [
  //   {
  //     cover:
  //       'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/cover%2Fzelda-breath-of-the-wild-1655249167687.jpg?alt=media&token=5411b64e-3d8f-40b7-a6e8-4a16b10ba3f9',
  //     id: 'hkjbdnf',
  //     name: 'The Week-end',
  //   },
  // ];
  public musicPlaylist: IMusic[] = [];
  //  = [
  //   {
  //     cover:
  //       'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/cover%2Fzelda-breath-of-the-wild-1655249167687.jpg?alt=media&token=5411b64e-3d8f-40b7-a6e8-4a16b10ba3f9',
  //     title: 'MusicTitle',
  //     artistId: 'Ryan',
  //     duration: '3.12',
  //     url: 'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/%F0%9F%8E%A4COUTINHO%20GETS%20SOLD!%F0%9F%8E%A4%20Messi%20%26%20Suarez%20sort%20a%20transfer!%20Man%20Utd%20Liverpool%20PSG.mp3?alt=media&token=87fdfd7b-ea78-4e73-a93d-49691e584a78',
  //     id: '41sdsds2',
  //     featuring: [],
  //     listeningCount: '0',
  //     lyrics: 'lyrics',
  //   },
  // ];
  public listPlaylistes: IPlaylist[] = [];
  // = [
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '78982',
  //   },
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '451',
  //   },
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '4553',
  //   },
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '4ggdfg',
  //   },
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '5495',
  //   },
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '7242',
  //   },
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: 'lkj6',
  //   },
  //   {
  //     cover: 'assets/avatar/album-photo.jpg',
  //     title: 'Work Instrument',
  //     artist: 'NamaUser',
  //     nbSong: '20',
  //     id: '154158',
  //   },
  // ];
  public isModalOpen: boolean;
  private modalSubscription: Subscription;
  searchTerm: string = '';
  store = inject(Store<AppState>);
  filteredSongs$: Observable<IMusic[]>;
  constructor(private modalStateService: ModalStateService) {
    this.modalSubscription = modalStateService.modalOpen$.subscribe(
      (value) => (this.isModalOpen = value)
    );
  }

  ngOnInit() {
    console.log('init last played component');
  }
  onSearchTermChange(term: string) {
    console.log('[DEBUG] search.page: Search term received:', term); // Log pour vérifier le terme
    this.searchTerm = term;

    // Met à jour les flux d'observables en fonction du terme de recherche
    this.store.select(selectSongsBySearchTerm(term)).subscribe({
      next: (songs) => {
        console.log('[DEBUG] Search songs in subscription:', songs);
        this.musicPlaylist = songs; // Doit être un tableau
      },
      error: (err) => {
        console.error('[DEBUG] Error in subscription:', err);
      },
    });
    this.filteredSongs$ = this.store.select(selectSongsBySearchTerm(term));
    console.log('[DEBUG] search.page: filteredSongs$ observable updated.'); // Log après la mise à jour des chansons
  }
}

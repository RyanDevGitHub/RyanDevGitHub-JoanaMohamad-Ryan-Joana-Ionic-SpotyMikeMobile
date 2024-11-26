import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { HeaderCategoryComponent } from 'src/app/shared/components/headers/header-category/header-category.component';
import { DisplayItemComponent } from 'src/app/shared/components/display-item/display-item.component';
import { IPlaylist } from 'src/app/core/interfaces/playlistes';
import { IMusic } from 'src/app/core/interfaces/music';
import { Subscription } from 'rxjs';
import { ModalStateService } from 'src/app/core/services/modal-state.service';

@Component({
  selector: 'app-top-songs',
  templateUrl: './top-songs.page.html',
  styleUrls: ['./top-songs.page.scss'],
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
  ],
})
export class TopSongsPage implements OnInit {
  public isModalOpen: boolean;
  private modalSubscription: Subscription;
  public listPlaylistes: IPlaylist[] = [];
  // = [
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

  public listMusics: IMusic[] = [];
  // = [
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
  //   {
  //     cover:
  //       'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/cover%2Fzelda-breath-of-the-wild-1655249167687.jpg?alt=media&token=5411b64e-3d8f-40b7-a6e8-4a16b10ba3f9',
  //     title: 'MusicTitle',
  //     artistId: 'Ryan',
  //     duration: '3.12',
  //     url: 'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/%F0%9F%8E%A4COUTINHO%20GETS%20SOLD!%F0%9F%8E%A4%20Messi%20%26%20Suarez%20sort%20a%20transfer!%20Man%20Utd%20Liverpool%20PSG.mp3?alt=media&token=87fdfd7b-ea78-4e73-a93d-49691e584a78',
  //     id: '41dds2',
  //     featuring: [],
  //     listeningCount: '0',
  //     lyrics: 'lyrics',
  //   },
  // ];
  constructor(private modalStateService: ModalStateService) {
    this.modalSubscription = modalStateService.modalOpen$.subscribe(
      (value) => (this.isModalOpen = value)
    );
  }

  ngOnInit() {
    console.log('init last played component');
  }
}

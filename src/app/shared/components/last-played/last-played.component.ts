import { Component, OnInit } from '@angular/core';
import {
  IonCol,
  IonGrid,
  IonImg,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonRow,
  IonContent,
  IonList,
  InfiniteScrollCustomEvent,
  IonItem,
  IonLabel,
  IonAvatar,
} from '@ionic/angular/standalone';
import { SongOptionComponent } from '../song-option/song-option.component';
import { SeeAllComponent } from '../see-all/see-all.component';
import { IPlaylist } from 'src/app/core/interfaces/playlistes';
import { SectionWithDropdownComponent } from '../section-with-dropdown/section-with-dropdown.component';
import { IMusic } from 'src/app/core/interfaces/music';

@Component({
  selector: 'app-last-played',
  templateUrl: './last-played.component.html',
  standalone: true,
  styleUrls: ['./last-played.component.scss'],
  imports: [
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    SongOptionComponent,
    SeeAllComponent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonList,
    IonContent,
    IonItem,
    IonLabel,
    IonAvatar,
    SectionWithDropdownComponent,
  ],
})
export class LastPlayedComponent implements OnInit {
  public musicList: IMusic[] = [
    {
      cover:
        'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/cover%2Fzelda-breath-of-the-wild-1655249167687.jpg?alt=media&token=5411b64e-3d8f-40b7-a6e8-4a16b10ba3f9',
      title: 'MusicTitle',
      artist: 'Ryan',
      duration: '3.12',
      url: 'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/%F0%9F%8E%A4COUTINHO%20GETS%20SOLD!%F0%9F%8E%A4%20Messi%20%26%20Suarez%20sort%20a%20transfer!%20Man%20Utd%20Liverpool%20PSG.mp3?alt=media&token=87fdfd7b-ea78-4e73-a93d-49691e584a78',
      id: '412',
    },
    {
      cover:
        'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/cover%2Fzelda-breath-of-the-wild-1655249167687.jpg?alt=media&token=5411b64e-3d8f-40b7-a6e8-4a16b10ba3f9',
      title: 'MusicTitle',
      artist: 'Ryan',
      duration: '3.12',
      url: 'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/%F0%9F%8E%A4COUTINHO%20GETS%20SOLD!%F0%9F%8E%A4%20Messi%20%26%20Suarez%20sort%20a%20transfer!%20Man%20Utd%20Liverpool%20PSG.mp3?alt=media&token=87fdfd7b-ea78-4e73-a93d-49691e584a78',
      id: '412',
    },
    {
      cover:
        'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/cover%2Fzelda-breath-of-the-wild-1655249167687.jpg?alt=media&token=5411b64e-3d8f-40b7-a6e8-4a16b10ba3f9',
      title: 'MusicTitle',
      artist: 'Ryan',
      duration: '3.12',
      url: 'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/%F0%9F%8E%A4COUTINHO%20GETS%20SOLD!%F0%9F%8E%A4%20Messi%20%26%20Suarez%20sort%20a%20transfer!%20Man%20Utd%20Liverpool%20PSG.mp3?alt=media&token=87fdfd7b-ea78-4e73-a93d-49691e584a78',
      id: '412',
    },
    {
      cover:
        'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/cover%2Fzelda-breath-of-the-wild-1655249167687.jpg?alt=media&token=5411b64e-3d8f-40b7-a6e8-4a16b10ba3f9',
      title: 'MusicTitle',
      artist: 'Ryan',
      duration: '3.12',
      url: 'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/%F0%9F%8E%A4COUTINHO%20GETS%20SOLD!%F0%9F%8E%A4%20Messi%20%26%20Suarez%20sort%20a%20transfer!%20Man%20Utd%20Liverpool%20PSG.mp3?alt=media&token=87fdfd7b-ea78-4e73-a93d-49691e584a78',
      id: '412',
    },
  ];

  constructor() {}

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {}

  onIonInfinite(ev: any) {}
}

import { Component, OnInit } from '@angular/core';
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
  IonImg,
  IonButton,
  IonButtons,
  IonIcon,
} from '@ionic/angular/standalone';
import { MusicContainerComponent } from 'src/app/shared/components/containers/music-container/music-container.component';
import { IMusic } from 'src/app/core/interfaces/music';
import { SectionWithDropdownComponent } from 'src/app/shared/components/section-with-dropdown/section-with-dropdown.component';
import { addIcons } from 'ionicons';
import { playOutline } from 'ionicons/icons';
import { ModalStateService } from 'src/app/core/services/modal-state.service';
import { Subscription } from 'rxjs';
import { BackButtonComponent } from 'src/app/shared/components/button/back-button/back-button.component';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.page.html',
  styleUrls: ['./artist-page.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonImg,
    IonText,
    IonCol,
    IonGrid,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonRow,
    SectionWithDropdownComponent,
    MusicContainerComponent,
    IonButtons,
    IonIcon,
    BackButtonComponent,
  ],
})
export class ArtistPagePage implements OnInit {
  public musicList: IMusic[] = [
    {
      cover:
        'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/cover%2Fzelda-breath-of-the-wild-1655249167687.jpg?alt=media&token=5411b64e-3d8f-40b7-a6e8-4a16b10ba3f9',
      title: 'MusicTitle',
      artistId: 'Ryan',
      duration: '3.12',
      url: 'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/%F0%9F%8E%A4COUTINHO%20GETS%20SOLD!%F0%9F%8E%A4%20Messi%20%26%20Suarez%20sort%20a%20transfer!%20Man%20Utd%20Liverpool%20PSG.mp3?alt=media&token=87fdfd7b-ea78-4e73-a93d-49691e584a78',
      id: '412',
      featuring: [],
      listeningCount: '0',
      lyrics: 'lyrics',
    },
    {
      cover:
        'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/cover%2Fzelda-breath-of-the-wild-1655249167687.jpg?alt=media&token=5411b64e-3d8f-40b7-a6e8-4a16b10ba3f9',
      title: 'MusicTitle',
      artistId: 'Ryan',
      duration: '3.12',
      url: 'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/%F0%9F%8E%A4COUTINHO%20GETS%20SOLD!%F0%9F%8E%A4%20Messi%20%26%20Suarez%20sort%20a%20transfer!%20Man%20Utd%20Liverpool%20PSG.mp3?alt=media&token=87fdfd7b-ea78-4e73-a93d-49691e584a78',
      id: '412',
      featuring: [],
      listeningCount: '0',
      lyrics: 'lyrics',
    },
    {
      cover:
        'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/cover%2Fzelda-breath-of-the-wild-1655249167687.jpg?alt=media&token=5411b64e-3d8f-40b7-a6e8-4a16b10ba3f9',
      title: 'MusicTitle',
      artistId: 'Ryan',
      duration: '3.12',
      url: 'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/%F0%9F%8E%A4COUTINHO%20GETS%20SOLD!%F0%9F%8E%A4%20Messi%20%26%20Suarez%20sort%20a%20transfer!%20Man%20Utd%20Liverpool%20PSG.mp3?alt=media&token=87fdfd7b-ea78-4e73-a93d-49691e584a78',
      id: '412',
      featuring: [],
      listeningCount: '0',
      lyrics: 'lyrics',
    },
    {
      cover:
        'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/cover%2Fzelda-breath-of-the-wild-1655249167687.jpg?alt=media&token=5411b64e-3d8f-40b7-a6e8-4a16b10ba3f9',
      title: 'MusicTitle',
      artistId: 'Ryan',
      duration: '3.12',
      url: 'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/%F0%9F%8E%A4COUTINHO%20GETS%20SOLD!%F0%9F%8E%A4%20Messi%20%26%20Suarez%20sort%20a%20transfer!%20Man%20Utd%20Liverpool%20PSG.mp3?alt=media&token=87fdfd7b-ea78-4e73-a93d-49691e584a78',
      id: '412',
      featuring: [],
      listeningCount: '0',
      lyrics: 'lyrics',
    },
    {
      cover:
        'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/cover%2Fzelda-breath-of-the-wild-1655249167687.jpg?alt=media&token=5411b64e-3d8f-40b7-a6e8-4a16b10ba3f9',
      title: 'MusicTitle',
      artistId: 'Ryan',
      duration: '3.12',
      url: 'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/%F0%9F%8E%A4COUTINHO%20GETS%20SOLD!%F0%9F%8E%A4%20Messi%20%26%20Suarez%20sort%20a%20transfer!%20Man%20Utd%20Liverpool%20PSG.mp3?alt=media&token=87fdfd7b-ea78-4e73-a93d-49691e584a78',
      id: '412',
      featuring: [],
      listeningCount: '0',
      lyrics: 'lyrics',
    },
    {
      cover:
        'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/cover%2Fzelda-breath-of-the-wild-1655249167687.jpg?alt=media&token=5411b64e-3d8f-40b7-a6e8-4a16b10ba3f9',
      title: 'MusicTitle',
      artistId: 'Ryan',
      duration: '3.12',
      url: 'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/%F0%9F%8E%A4COUTINHO%20GETS%20SOLD!%F0%9F%8E%A4%20Messi%20%26%20Suarez%20sort%20a%20transfer!%20Man%20Utd%20Liverpool%20PSG.mp3?alt=media&token=87fdfd7b-ea78-4e73-a93d-49691e584a78',
      id: '412',
      featuring: [],
      listeningCount: '0',
      lyrics: 'lyrics',
    },
    {
      cover:
        'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/cover%2Fzelda-breath-of-the-wild-1655249167687.jpg?alt=media&token=5411b64e-3d8f-40b7-a6e8-4a16b10ba3f9',
      title: 'MusicTitle',
      artistId: 'Ryan',
      duration: '3.12',
      url: 'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/%F0%9F%8E%A4COUTINHO%20GETS%20SOLD!%F0%9F%8E%A4%20Messi%20%26%20Suarez%20sort%20a%20transfer!%20Man%20Utd%20Liverpool%20PSG.mp3?alt=media&token=87fdfd7b-ea78-4e73-a93d-49691e584a78',
      id: '412',
      featuring: [],
      listeningCount: '0',
      lyrics: 'lyrics',
    },
    {
      cover:
        'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/cover%2Fzelda-breath-of-the-wild-1655249167687.jpg?alt=media&token=5411b64e-3d8f-40b7-a6e8-4a16b10ba3f9',
      title: 'MusicTitle',
      artistId: 'Ryan',
      duration: '3.12',
      url: 'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/%F0%9F%8E%A4COUTINHO%20GETS%20SOLD!%F0%9F%8E%A4%20Messi%20%26%20Suarez%20sort%20a%20transfer!%20Man%20Utd%20Liverpool%20PSG.mp3?alt=media&token=87fdfd7b-ea78-4e73-a93d-49691e584a78',
      id: '412',
      featuring: [],
      listeningCount: '0',
      lyrics: 'lyrics',
    },
  ];
  public isModalOpen: boolean;
  private modalSubscription: Subscription;
  constructor(private modalStateService: ModalStateService) {
    this.modalSubscription = modalStateService.modalOpen$.subscribe(
      (value) => (this.isModalOpen = value)
    );
  }

  ngOnInit() {
    addIcons({ playOutline });
  }
  onClick() {}
}

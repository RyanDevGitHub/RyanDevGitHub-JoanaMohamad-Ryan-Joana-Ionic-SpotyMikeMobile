import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonImg,
  IonRow,
  IonTitle,
  IonToast,
  IonToolbar,
  ToastController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronUpOutline, closeOutline } from 'ionicons/icons';
import { MinimizePlayerAudioService } from 'src/app/core/services/minimize-player-audio.service';
import { MusicServiceService } from 'src/app/core/services/music-service.service';
import { Router } from '@angular/router';
import { MusicNavBarComponent } from '../music-nav-bar/music-nav-bar.component';
import { PlaySongPage } from 'src/app/shared/modal/play-song/play-song.page';
import { ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-minimize-player-audio',
  templateUrl: './minimize-player-audio.component.html',
  standalone: true,
  styleUrls: ['./minimize-player-audio.component.scss'],
  imports: [
    IonGrid,
    IonContent,
    IonRow,
    IonCol,
    IonIcon,
    IonToast,
    IonButton,
    IonToolbar,
    IonTitle,
    MusicNavBarComponent,
    PlaySongPage,
    IonImg,
  ],
})
export class MinimizePlayerAudioComponent implements OnInit {
  constructor(
    private toastController: ToastController,
    @Inject(MinimizePlayerAudioService)
    @Inject(ModalController)
    private modalCtrl: ModalController,
    public minimizePlayerAudioService: MinimizePlayerAudioService,
    public audioService: MusicServiceService
  ) { }
  isPlaying = false;
  @Input() image: string =
    'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/cover%2Fzelda-breath-of-the-wild-1655249167687.jpg?alt=media&token=5411b64e-3d8f-40b7-a6e8-4a16b10ba3f9';

  ngOnInit() {
    addIcons({ chevronUpOutline, closeOutline });
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: PlaySongPage,
    });
    modal.present();
  }

  deleteComponent() {
    this.minimizePlayerAudioService.hideMiniPlayer();
    this.openModal();

  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonCol, IonImg, IonRow, IonGrid } from '@ionic/angular/standalone';
import { IMusic } from 'src/app/core/interfaces/music';
import { ModalStateService } from 'src/app/core/services/modal-state.service';
import { PlaySongPage } from 'src/app/shared/modal/play-song/play-song.page';

@Component({
  selector: 'app-music-container-vertical',
  templateUrl: './music-container-vertical.component.html',
  styleUrls: ['./music-container-vertical.component.scss'],
  standalone: true,
  imports: [IonGrid, IonCol, IonRow, IonImg],
})
export class MusicContainerVerticalComponent implements OnInit {
  @Input() song: IMusic;
  modalStateService: ModalStateService;
  constructor(
    private modalCtrl: ModalController,
    modalStateService: ModalStateService
  ) {}

  ngOnInit() {}

  async openPlayer() {
    const modal = await this.modalCtrl.create({
      component: PlaySongPage,
    });
    modal.present();
  }

  openModal() {
    this.modalStateService.setModalOpen(true);
  }
}

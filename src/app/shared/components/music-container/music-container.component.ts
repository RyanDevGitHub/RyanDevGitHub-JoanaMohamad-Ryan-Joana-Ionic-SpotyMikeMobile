import { ModalStateService } from './../../../core/services/modal-state.service';
import { SongOptionComponent } from './../song-option/song-option.component';
import { Component, Input, OnInit } from '@angular/core';
import { IonCol, ModalController } from '@ionic/angular/standalone';
import { IonImg ,IonRow} from '@ionic/angular/standalone';
import { PlaySongPage } from '../../modal/play-song/play-song.page';
import { LikeSongComponent } from '../like-song/like-song.component';
import { ShareSongComponent } from '../share-song/share-song.component';

@Component({
  selector: 'app-music-container',
  templateUrl: './music-container.component.html',
  styleUrls: ['./music-container.component.scss'],
  standalone:true,
  imports:[IonRow,IonImg,SongOptionComponent,PlaySongPage,LikeSongComponent,ShareSongComponent,IonCol],
})
export class MusicContainerComponent  implements OnInit {

  modalStateService :ModalStateService;
  constructor(private modalCtrl: ModalController, modalStateService :ModalStateService) {

   }
  @Input() cover :string;
  @Input() musicName :string;
  @Input() duration :string;
  @Input() artistName :string;
  @Input() id:string;

  ngOnInit() {}

  async openPlayer(){
    const modal = await this.modalCtrl.create({
      component: PlaySongPage ,
    });
    modal.present();
  }

 openModal(){
  this.modalStateService.setModalOpen(true);
 }
  
}

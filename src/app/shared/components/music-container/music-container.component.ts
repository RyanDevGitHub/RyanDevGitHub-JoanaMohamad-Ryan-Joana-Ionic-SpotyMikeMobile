import { SongOptionComponent } from './../song-option/song-option.component';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonImg ,IonRow} from '@ionic/angular/standalone';
import { PlaySongPage } from '../../modal/play-song/play-song.page';

@Component({
  selector: 'app-music-container',
  templateUrl: './music-container.component.html',
  styleUrls: ['./music-container.component.scss'],
  standalone:true,
  imports:[IonRow,IonImg,SongOptionComponent,PlaySongPage],
})
export class MusicContainerComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  @Input() cover :string;
  @Input() musicName :string;
  @Input() duration :string;
  @Input() artistName :string;

  ngOnInit() {}

  async openPlayer(){
    const modal = await this.modalCtrl.create({
      component: PlaySongPage ,
    });
    modal.present();
  }

  async openSetting(){
    const modal = await this.modalCtrl.create({
      component: PlaySongPage ,
    });
    modal.present();
  }
}

import { SongOptionComponent } from './../song-option/song-option.component';
import { Component, OnInit, input, Input } from '@angular/core';
import { IonImg, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-playlist-container',
  templateUrl: './playlist-container.component.html',
  styleUrls: ['./playlist-container.component.scss'],
  standalone:true,
  imports:[
    IonRow,IonImg,SongOptionComponent
  ]
})
export class PlaylistContainerComponent  implements OnInit {

  @Input() nbSong: string;
  @Input() playlistName: string;
  @Input() cover :string;

  constructor() { }

  ngOnInit() {}

}

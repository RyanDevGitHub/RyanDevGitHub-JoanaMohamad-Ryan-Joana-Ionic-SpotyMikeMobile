import { Component, OnInit } from '@angular/core';
import { IonCol, IonGrid, IonImg, IonRow } from '@ionic/angular/standalone';
import { SongOptionComponent } from '../song-option/song-option.component';
import { SeeAllComponent } from '../see-all/see-all.component';

@Component({
  selector: 'app-last-played',
  templateUrl: './last-played.component.html',
  standalone:true,
  styleUrls: ['./last-played.component.scss'],
  imports:[IonGrid,IonRow,IonCol,IonImg,SongOptionComponent,SeeAllComponent]
})
export class LastPlayedComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

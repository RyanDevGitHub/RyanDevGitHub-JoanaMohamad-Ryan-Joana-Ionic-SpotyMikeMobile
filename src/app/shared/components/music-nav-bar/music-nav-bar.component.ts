import { addIcons } from 'ionicons';
import { IonButton, IonContent, IonRange, IonIcon, IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { playOutline, playSkipBack, playSkipBackOutline, playSkipForwardOutline, repeatOutline, shuffleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-music-nav-bar',
  templateUrl: './music-nav-bar.component.html',
  standalone:true,
  styleUrls: ['./music-nav-bar.component.scss'],
  imports:[IonButton,IonRange,IonIcon,IonGrid,IonCol,IonRow],
})
export class MusicNavBarComponent  implements OnInit {

  constructor() { }


  ngOnInit() {
    addIcons({playOutline,playSkipBackOutline,playSkipForwardOutline,repeatOutline,shuffleOutline})
  }


}

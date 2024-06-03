import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { Component, OnInit } from '@angular/core';
import { heartOutline, shareSocialOutline } from 'ionicons/icons';

@Component({
  selector: 'app-share-song',
  templateUrl: './share-song.component.html',
  standalone:true,
  styleUrls: ['./share-song.component.scss'],
  imports:[IonButton,IonIcon],
})
export class ShareSongComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    addIcons({shareSocialOutline})
  }

}

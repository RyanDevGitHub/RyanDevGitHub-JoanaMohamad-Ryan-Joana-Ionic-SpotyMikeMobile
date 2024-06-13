import { IonAvatar, IonButton, IonCol, IonGrid, IonIcon, IonModal, IonRow } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { Component, Input, OnInit } from '@angular/core';
import { heartOutline, shareSocialOutline } from 'ionicons/icons';

@Component({
  selector: 'app-share-song',
  templateUrl: './share-song.component.html',
  standalone:true,
  styleUrls: ['./share-song.component.scss'],
  imports:[IonButton,IonIcon,IonModal,IonGrid,IonCol,IonRow,IonAvatar],
})
export class ShareSongComponent  implements OnInit {

  constructor() { }
  @Input()id:string
  ngOnInit() {
    addIcons({shareSocialOutline})
  }

  onClick(){
  console.log('click!');
 }

}

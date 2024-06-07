import { Component, OnInit } from '@angular/core';
import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonRow, IonToast, ToastController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronUpOutline } from 'ionicons/icons';

@Component({
  selector: 'app-minimize-player-audio',
  templateUrl: './minimize-player-audio.component.html',
  standalone:true,
  styleUrls: ['./minimize-player-audio.component.scss'],
  imports:[IonGrid,IonContent,IonRow,IonCol,IonIcon,IonToast,IonButton

  ]
})
export class MinimizePlayerAudioComponent  implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
    addIcons({chevronUpOutline})
  }

}

import { Component, OnInit } from '@angular/core';
import { IonToast } from '@ionic/angular/standalone';
import { IonButton, IonGrid, IonIcon, IonRow } from '@ionic/angular/standalone';
import { IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, home, person, play } from 'ionicons/icons';
import { MinimizePlayerAudioComponent } from 'src/app/shared/components/minimize-player-audio/minimize-player-audio.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  standalone:true,
  styleUrls: ['./accueil.page.scss'],
  imports:[IonTabs,IonTabBar,IonTabButton,IonIcon,IonGrid,IonRow,MinimizePlayerAudioComponent,IonButton,IonToast]
})
export class AccueilPage implements OnInit {

  constructor() { }
  ngOnInit(): void {
    addIcons({heart,home,play,person})
  }
}

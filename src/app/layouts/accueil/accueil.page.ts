import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, home, person, play } from 'ionicons/icons';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  standalone:true,
  styleUrls: ['./accueil.page.scss'],
  imports:[IonTabs,IonTabBar,IonTabButton,IonIcon
  ],
})
export class AccueilPage implements OnInit {

  constructor() { }
  ngOnInit(): void {
    addIcons({heart,home,play,person})
  }
}

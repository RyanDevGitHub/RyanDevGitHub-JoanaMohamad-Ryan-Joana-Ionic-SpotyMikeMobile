import { Component, OnInit } from '@angular/core';
import {IonCol, IonGrid, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonRow, IonContent, IonList, InfiniteScrollCustomEvent, IonItem, IonLabel, IonAvatar } from '@ionic/angular/standalone';
import { SongOptionComponent } from '../song-option/song-option.component';
import { SeeAllComponent } from '../see-all/see-all.component';


@Component({
  selector: 'app-last-played',
  templateUrl: './last-played.component.html',
  standalone:true,
  styleUrls: ['./last-played.component.scss'],
  imports:[IonGrid,IonRow,IonCol,IonImg,SongOptionComponent,SeeAllComponent,IonInfiniteScroll,IonInfiniteScrollContent,IonList,IonContent,IonItem,IonLabel,IonAvatar]
})
export class LastPlayedComponent  implements OnInit {
  constructor() { }
  items : string [] = [];

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(ev:any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}

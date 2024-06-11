import { Component, Input, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, IonCol, IonContent, IonImg, IonRow,IonList, IonInfiniteScrollContent,IonInfiniteScroll } from '@ionic/angular/standalone';
import { IonGrid } from '@ionic/angular/standalone';
import { SeeAllComponent } from '../see-all/see-all.component';



@Component({
  selector: 'app-top-songs',
  templateUrl: './top-songs.component.html',
  standalone:true,
  styleUrls: ['./top-songs.component.scss'],
  imports:[IonGrid,IonRow,IonCol,IonImg,SeeAllComponent,IonContent,IonList,IonInfiniteScroll,IonInfiniteScrollContent
    
  ]
})
export class TopSongsComponent  implements OnInit {

  @Input() items: any[] = [];


  constructor() { }

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

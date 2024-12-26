import { Component, Input, OnInit } from '@angular/core';
import {
  InfiniteScrollCustomEvent,
  IonCol,
  IonContent,
  IonImg,
  IonRow,
  IonList,
  IonInfiniteScrollContent,
  IonInfiniteScroll,
} from '@ionic/angular/standalone';
import { IonGrid } from '@ionic/angular/standalone';
import { SeeAllComponent } from '../../button/see-all/see-all.component';
import { Observable, of } from 'rxjs';
import { IMusic, IMusicDate, MusicGenre } from 'src/app/core/interfaces/music';
import { CommonModule } from '@angular/common';
import { MusicContainerComponent } from '../../containers/music-container/music-container.component';
import { MusicContainerVerticalComponent } from '../../containers/music-container-vertical/music-container-vertical.component';

@Component({
  selector: 'app-top-songs',
  templateUrl: './top-songs.component.html',
  standalone: true,
  styleUrls: ['./top-songs.component.scss'],
  imports: [
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    SeeAllComponent,
    IonContent,
    IonList,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    CommonModule,
    MusicContainerVerticalComponent,
  ],
})
export class TopSongsComponent implements OnInit {
  @Input() items: IMusic[];
  song: [];

  constructor() {}

  ngOnInit() {}

  private generateItems(existingItems: IMusicDate[]): IMusicDate[] {
    const count = existingItems.length + 1;
    const newItems: IMusicDate[] = [];
    for (let i = 0; i < 50; i++) {
      newItems.push({
        id: `item-${count + i}`,
        title: `Titre ${count + i}`,
        artistId: 'artiste-placeholder',
        cover: 'assets/avatar/album-photo.jpg',
        url: '',
        lyrics: '',
        duration: '',
        listeningCount: '0',
        featuring: [],
        createAt: new Date(),
        genre: MusicGenre.Rock,
      });
    }
    return [...existingItems, ...newItems];
  }

  // onIonInfinite(ev: any) {
  //   // Traiter l'Observable
  //   this.items.subscribe((currentItems) => {
  //     const updatedItems = this.generateItems(currentItems);

  //     // Fusionner avec les nouvelles données (si nécessaire)
  //     this.items = of(updatedItems); // Met à jour items avec les nouveaux éléments

  //     setTimeout(() => {
  //       (ev as InfiniteScrollCustomEvent).target.complete();
  //     }, 500);
  //   });
  // }
}

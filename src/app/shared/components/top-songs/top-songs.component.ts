import { Component, Input, OnInit } from '@angular/core';
import { IonCol, IonImg, IonRow } from '@ionic/angular/standalone';
import { IonGrid } from '@ionic/angular/standalone';

@Component({
  selector: 'app-top-songs',
  templateUrl: './top-songs.component.html',
  standalone:true,
  styleUrls: ['./top-songs.component.scss'],
  imports:[IonGrid,IonRow,IonCol,IonImg
    
  ]
})
export class TopSongsComponent  implements OnInit {

  @Input() items: any[] = [];
  constructor() { }

  ngOnInit() {

    console.log(this.items);
  }

}

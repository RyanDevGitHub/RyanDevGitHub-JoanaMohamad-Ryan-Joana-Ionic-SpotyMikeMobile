import { Component, OnInit } from '@angular/core';
import {
  IonLabel,
  IonItemDivider,
  IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-lyrics-box',
  templateUrl: './lyrics-box.component.html',
  standalone: true,
  styleUrls: ['./lyrics-box.component.scss'],
  imports: [IonItemDivider, IonLabel, IonContent],
})
export class LyricsBoxComponent implements OnInit {
  public lyrics = '';
  constructor() {}
  ngOnInit() {
    this.lyrics = 'Lyrics';
  }
}

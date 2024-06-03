import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { ellipsisHorizontalOutline } from 'ionicons/icons';
import { IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-song-option',
  templateUrl: './song-option.component.html',
  standalone: true,
  styleUrls: ['./song-option.component.scss'],
  imports: [IonIcon  ],

})
export class SongOptionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {

    addIcons({ ellipsisHorizontalOutline });
  }

}

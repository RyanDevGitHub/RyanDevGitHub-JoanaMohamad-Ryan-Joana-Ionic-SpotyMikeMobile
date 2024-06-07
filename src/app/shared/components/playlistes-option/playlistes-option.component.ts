import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { ellipsisHorizontalCircleOutline, ellipsisHorizontalOutline } from 'ionicons/icons';

@Component({
  selector: 'app-playlistes-option',
  templateUrl: './playlistes-option.component.html',
  standalone:true,
  styleUrls: ['./playlistes-option.component.scss'],
  imports:[IonIcon
  ]
})
export class PlaylistesOptionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    addIcons({ellipsisHorizontalOutline})
  }

}

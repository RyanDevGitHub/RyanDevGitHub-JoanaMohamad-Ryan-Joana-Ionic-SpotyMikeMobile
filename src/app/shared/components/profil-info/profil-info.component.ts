import { Component, OnInit } from '@angular/core';
import { IonAvatar, IonCol, IonContent, IonGrid, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-profil-info',
  templateUrl: './profil-info.component.html',
  styleUrls: ['./profil-info.component.scss'],
  standalone:true,
  imports:[
    IonAvatar,IonContent,IonGrid,IonRow,IonCol
  ]
})
export class ProfilInfoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

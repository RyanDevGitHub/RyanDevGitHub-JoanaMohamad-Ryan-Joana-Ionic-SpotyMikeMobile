import { Component, OnInit } from '@angular/core';
import { IonAvatar, IonText, IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.scss'],
  standalone: true,
  imports: [IonRow, IonGrid, IonAvatar, IonCol, IonText]
})
export class ProfileItemComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}

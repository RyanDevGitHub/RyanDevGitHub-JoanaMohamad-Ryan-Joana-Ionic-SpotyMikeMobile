import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';
import { PlaylistesOptionComponent } from 'src/app/shared/components/playlistes-option/playlistes-option.component';

@Component({
  selector: 'app-playlistes',
  templateUrl: './playlistes.page.html',
  styleUrls: ['./playlistes.page.scss'],
  standalone: true,
  imports: [IonCol, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonRow,PlaylistesOptionComponent]
})
export class PlaylistesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

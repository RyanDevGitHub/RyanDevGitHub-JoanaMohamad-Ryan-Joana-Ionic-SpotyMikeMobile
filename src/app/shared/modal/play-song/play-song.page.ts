import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { personCircleOutline, searchOutline } from 'ionicons/icons';
import { SearchButtonComponent } from 'src/app/shared/components/search-button/search-button.component';
import { BackButtonComponent } from '../../components/back-button/back-button.component';

@Component({
  selector: 'app-play-song',
  templateUrl: './play-song.page.html',
  styleUrls: ['./play-song.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, 
    IonButton,
    IonIcon,
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    SearchButtonComponent,
    BackButtonComponent,
  ],
})
export class PlaySongPage implements OnInit {
  constructor() {
    addIcons({ searchOutline, personCircleOutline });
  }

  ngOnInit() {
    addIcons({ searchOutline, personCircleOutline });
  }
}

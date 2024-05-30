import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonIcon, IonButton } from '@ionic/angular/standalone';
import { personCircleOutline, searchOutline } from 'ionicons/icons';
import { UserMenuComponent } from 'src/app/shared/components/user-menu/user-menu.component';
import { SearchButtonComponent } from 'src/app/shared/components/search-button/search-button.component';

@Component({
  selector: 'app-play-song',
  templateUrl: './play-song.page.html',
  styleUrls: ['./play-song.page.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,UserMenuComponent,SearchButtonComponent]
})
export class PlaySongPage implements OnInit {

  constructor() {
    addIcons({searchOutline ,personCircleOutline});
   }

  ngOnInit() {
    addIcons({searchOutline ,personCircleOutline, });
  }


}

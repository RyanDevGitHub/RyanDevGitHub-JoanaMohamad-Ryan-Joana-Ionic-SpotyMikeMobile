import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { HeaderCategoryComponent } from 'src/app/shared/components/headers/header-category/header-category.component';
import { DisplayItemComponent } from 'src/app/shared/components/display-item/display-item.component';
import { IPlaylist } from 'src/app/core/interfaces/playlistes';
import { IMusic } from 'src/app/core/interfaces/music';
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { selectLastSongsByUser } from 'src/app/core/store/selector/song.selector';

@Component({
  selector: 'app-last-played',
  templateUrl: './last-played.page.html',
  styleUrls: ['./last-played.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderCategoryComponent,
    DisplayItemComponent,
  ],
})
export class LastPlayedPage implements OnInit {
  constructor() {}
  public listMusics: IMusic[];
  public listPlaylistes: IPlaylist[];
  store = inject(Store<AppState>);

  ngOnInit() {
    console.log('init last played component');

    this.store.select(selectLastSongsByUser).subscribe({
      next: (songs) => {
        console.log('[DEBUG] TopsSongs in subscription:', songs);
        this.listMusics = songs; // Doit être un tableau
      },
      error: (err) => {
        console.error('[DEBUG] Error in subscription:', err);
      },
    });
  }
}

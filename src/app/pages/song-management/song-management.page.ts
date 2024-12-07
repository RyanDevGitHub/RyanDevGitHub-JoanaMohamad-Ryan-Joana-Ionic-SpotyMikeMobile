import { Component, inject, Input, OnInit } from '@angular/core';
import { HeaderSettingComponent } from 'src/app/shared/components/headers/header-setting/header-setting.component';
import {
  IonCol,
  IonGrid,
  IonRow,
  IonContent,
  IonList,
  InfiniteScrollCustomEvent,
  IonButton,
} from '@ionic/angular/standalone';
import { HeaderCategoryComponent } from '../../shared/components/headers/header-category/header-category.component';
import { SectionWithDropdownComponent } from 'src/app/shared/components/section-with-dropdown/section-with-dropdown.component';
import { MusicContainerComponent } from 'src/app/shared/components/containers/music-container/music-container.component';
import { IMusic } from 'src/app/core/interfaces/music';
import { AppState } from '@capacitor/app';
import { Store } from '@ngrx/store';
import { loadSong } from 'src/app/core/store/action/song.action';
import { debugSelectAllSongs } from 'src/app/core/store/selector/song.selector';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-song-management',
  templateUrl: './song-management.page.html',
  styleUrls: ['./song-management.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonList,
    IonContent,
    HeaderSettingComponent,
    IonGrid,
    IonCol,
    IonRow,
    HeaderCategoryComponent,
    MusicContainerComponent,
  ],
})
export class SongManagementPage implements OnInit {
  songs: IMusic[] = [];
  store = inject(Store<AppState>);
  private unsubscribe$ = new Subject<void>();
  constructor() {}

  ngOnInit() {
    this.store.dispatch(loadSong());

    this.store
      .select(debugSelectAllSongs)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (songs) => {
          console.log('[DEBUG] Songs in subscription:', songs);
          this.songs = songs;
        },
        error: (err) => {
          console.error('[DEBUG] Error in subscription:', err);
        },
      });
  }

  onIonInfinite(ev: any) {
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 5000);
  }

  openModalAddSong() {}

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

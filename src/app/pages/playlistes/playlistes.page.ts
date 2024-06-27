import { HeaderCategoryComponent } from 'src/app/shared/components/header-category/header-category.component';
import { SongOptionComponent } from './../../shared/components/song-option/song-option.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol, IonRow, IonImg, ModalController, IonButton, IonIcon } from '@ionic/angular/standalone';
import { PlaylistesOptionComponent } from 'src/app/shared/components/playlistes-option/playlistes-option.component';
import { LikeSongComponent } from 'src/app/shared/components/like-song/like-song.component';
import { ShareSongComponent } from 'src/app/shared/components/share-song/share-song.component';
import { IPlaylist } from 'src/app/core/interfaces/playlistes';
import { PlaySongPage } from 'src/app/shared/modal/play-song/play-song.page';
import { ModalStateService } from 'src/app/core/services/modal-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-playlistes',
  templateUrl: './playlistes.page.html',
  styleUrls: ['./playlistes.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonImg, IonCol, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonRow,PlaylistesOptionComponent,LikeSongComponent,ShareSongComponent,IonTitle,SongOptionComponent,HeaderCategoryComponent]
})


export class PlaylistesPage implements OnInit,OnDestroy {

  public isModalOpen = false;
  private modalSubscription: Subscription;
  constructor(private modalCtrl: ModalController ,private modalStateService: ModalStateService ) { 
    this.modalSubscription = modalStateService.modalOpen$.subscribe(
      value => this.isModalOpen = value
    );
  }
  public listPlaylistes :IPlaylist[] = [{cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:"56"},
    {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:"54"},
    {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:"53"},{cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:"444"},
    {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:"24"},
    {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:"645"},{cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:"744"},
    {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:"8488"}
    ]
  ngOnInit() {
    console.log(this.isModalOpen);
  }


  async openModal() {
    const modal = await this.modalCtrl.create({
      component: PlaySongPage ,
    });
    modal.present();
  }
  ngOnDestroy() {
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
  }
}

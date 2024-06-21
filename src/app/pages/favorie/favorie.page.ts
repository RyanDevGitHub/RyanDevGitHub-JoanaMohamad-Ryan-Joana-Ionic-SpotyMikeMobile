import { IFavorite } from './../../core/interfaces/favorites';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol, IonRow, IonImg } from '@ionic/angular/standalone';
import { PlaylistesOptionComponent } from 'src/app/shared/components/playlistes-option/playlistes-option.component';
import { LikeSongComponent } from 'src/app/shared/components/like-song/like-song.component';
import { ShareSongComponent } from 'src/app/shared/components/share-song/share-song.component';
import { ModalController } from '@ionic/angular';
import { PlaySongPage } from 'src/app/shared/modal/play-song/play-song.page';
import { SongOptionComponent } from 'src/app/shared/components/song-option/song-option.component';

@Component({
  selector: 'app-favorie',
  templateUrl: './favorie.page.html',
  styleUrls: ['./favorie.page.scss'],
  standalone: true,
  imports: [IonImg, IonRow, IonCol, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,PlaylistesOptionComponent, LikeSongComponent,ShareSongComponent,PlaySongPage,SongOptionComponent]
})
export class FavoriePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  public listFavorite :IFavorite[] = [{cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:"56"},
    {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:"54"},
    {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:"53"},{cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:"444"},
    {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:"24"},
    {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:"645"},{cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:"744"},
    {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:"8488"}
    ]

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: PlaySongPage ,
    });
    modal.present();
  }

}

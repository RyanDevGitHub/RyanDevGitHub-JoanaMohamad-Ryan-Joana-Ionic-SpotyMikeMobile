import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol, IonRow, IonImg, ModalController, IonButton, IonIcon } from '@ionic/angular/standalone';
import { PlaylistesOptionComponent } from 'src/app/shared/components/playlistes-option/playlistes-option.component';
import { LikeSongComponent } from 'src/app/shared/components/like-song/like-song.component';
import { ShareSongComponent } from 'src/app/shared/components/share-song/share-song.component';
import { IPlaylist } from 'src/app/core/interfaces/playlistes';
import { PlaySongPage } from 'src/app/shared/modal/play-song/play-song.page';

@Component({
  selector: 'app-playlistes',
  templateUrl: './playlistes.page.html',
  styleUrls: ['./playlistes.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonImg, IonCol, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonRow,PlaylistesOptionComponent,LikeSongComponent,ShareSongComponent,IonTitle]
})

export class PlaylistesPage implements OnInit {

  
  constructor(private modalCtrl: ModalController) { }
  public listPlaylistes :IPlaylist[] = [{cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'2'},
  {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'1'},
  {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'3'},{cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'4'},
  {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'5'},
  {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'7'},{cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'6'},
  {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'8'}
  ]
  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: PlaySongPage ,
    });
    modal.present();
  }
  onClick(){
    
  }
}

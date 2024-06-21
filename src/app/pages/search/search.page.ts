import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol, IonRow, IonText } from '@ionic/angular/standalone';
import { ResearchComponent } from 'src/app/shared/components/research/research.component';
import { IPlaylist } from 'src/app/core/interfaces/playlistes';
import { PlaylistContainerComponent } from 'src/app/shared/components/playlist-container/playlist-container.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonText, IonRow, IonCol, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,ResearchComponent,PlaylistContainerComponent]
})
export class SearchPage implements OnInit {

  public listPlaylistes :IPlaylist[] = [{cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'78982'},
    {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'451'},
    {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'4553'},{cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'4ggdfg'},
    {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'5495'},
    {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'7242'},{cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'lkj6'},
    {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'154158'}
    ]

  constructor() { }

  ngOnInit() {
  }

}

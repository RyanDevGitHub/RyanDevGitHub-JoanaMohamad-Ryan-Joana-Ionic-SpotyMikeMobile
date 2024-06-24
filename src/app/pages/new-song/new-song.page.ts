import { IMusic } from './../../core/interfaces/music';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { HeaderCategoryComponent } from 'src/app/shared/components/header-category/header-category.component';
import { DisplayItemComponent } from 'src/app/shared/components/display-item/display-item.component';
import { IPlaylist } from 'src/app/core/interfaces/playlistes';

@Component({
  selector: 'app-new-song',
  templateUrl: './new-song.page.html',
  styleUrls: ['./new-song.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,HeaderCategoryComponent,DisplayItemComponent]
})
export class NewSongPage implements OnInit {

  public listPlaylistes :IPlaylist[]  = [{cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'2'},
    {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'1'},
    {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'3'},{cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'4'},
    {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'5'},
    {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'7'},{cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'6'},
    {cover:"assets/avatar/album-photo.jpg",title:"Work Instrument",artist:"NamaUser",nbSong:"20",id:'8'},
    {cover:"assets/avatar/album-photo.jpg",title:"TEST",artist:"NamaUser",nbSong:"20",id:'8'}
    ]

    public listMusics :IMusic[]  = [{cover:'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/cover%2Fzelda-breath-of-the-wild-1655249167687.jpg?alt=media&token=5411b64e-3d8f-40b7-a6e8-4a16b10ba3f9',
      title:'MusicTitle',artist:'Ryan',duration:'3.12',url:'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/%F0%9F%8E%A4COUTINHO%20GETS%20SOLD!%F0%9F%8E%A4%20Messi%20%26%20Suarez%20sort%20a%20transfer!%20Man%20Utd%20Liverpool%20PSG.mp3?alt=media&token=87fdfd7b-ea78-4e73-a93d-49691e584a78',id:'41sdsds2'
    },{cover:'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/cover%2Fzelda-breath-of-the-wild-1655249167687.jpg?alt=media&token=5411b64e-3d8f-40b7-a6e8-4a16b10ba3f9',
      title:'MusicTitle',artist:'Ryan',duration:'3.12',url:'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/%F0%9F%8E%A4COUTINHO%20GETS%20SOLD!%F0%9F%8E%A4%20Messi%20%26%20Suarez%20sort%20a%20transfer!%20Man%20Utd%20Liverpool%20PSG.mp3?alt=media&token=87fdfd7b-ea78-4e73-a93d-49691e584a78',id:'41dds2'
    }
      ]
    
  
  constructor() { }

  ngOnInit() {
  }

}

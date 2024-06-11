import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";
import { addIcons } from "ionicons";
import { book, home } from "ionicons/icons";
import { TopSongComponent } from "src/app/shared/components/new-song/new-song.component";
import { MusicGenresComponent } from "src/app/shared/components/music-genres/music-genres.component";
import { TopSongsComponent } from "src/app/shared/components/top-songs/top-songs.component";
import { LastPlayedComponent } from "src/app/shared/components/last-played/last-played.component";


@Component({
  selector: "app-home-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
  standalone: true,
  imports: [
    IonicModule,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    TopSongComponent,
    MusicGenresComponent,
    TopSongsComponent,
    LastPlayedComponent,
  ],
})
export class HomePage implements OnInit {
  constructor() {
    addIcons({ book, home });
  }
  public listSongs :object[] = [{cover:'assets/avatar/album-photo.jpg' , artistName: 'Artiste' ,title:'Titre'},{cover:'assets/avatar/album-photo.jpg' , artistName: 'Artiste' ,title:'Titre'},{cover:'assets/avatar/album-photo.jpg' , artistName: 'Artiste' ,title:'Titre'}] 
  

  ngOnInit() {
    console.log('init home');
  }
}
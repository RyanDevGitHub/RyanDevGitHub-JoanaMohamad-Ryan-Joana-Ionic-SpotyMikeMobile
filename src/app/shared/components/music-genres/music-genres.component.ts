import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 
import { SeeAllComponent } from '../see-all/see-all.component';

@Component({
  selector: 'app-music-genres',
  templateUrl: './music-genres.component.html',
  styleUrls: ['./music-genres.component.scss'],
  standalone: true,
  imports: [IonicModule ,SeeAllComponent],
})
export class MusicGenresComponent  implements OnInit {
  selectedGenre: string = 'All';
  constructor() { }

  ngOnInit() {}
  selectGenre(genre: string) {
    this.selectedGenre = genre;
  }
}
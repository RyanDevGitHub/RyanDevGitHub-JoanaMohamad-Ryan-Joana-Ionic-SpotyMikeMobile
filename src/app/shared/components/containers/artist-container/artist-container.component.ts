import { Component, Input, OnInit, inject } from '@angular/core';
import { IonImg, IonRow, IonCol, IonText } from '@ionic/angular/standalone';
import { SongOptionComponent } from '../../button/song-option/song-option.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-container',
  templateUrl: './artist-container.component.html',
  styleUrls: ['./artist-container.component.scss'],
  standalone: true,
  imports: [IonText, IonCol, IonRow, IonImg, SongOptionComponent],
})
export class ArtistContainerComponent implements OnInit {
  @Input() cover: string;
  @Input() artistName: string;
  @Input() artistId: string;
  private router = inject(Router);
  constructor() {}

  ngOnInit() {}
  redirectToArtist() {
    this.router.navigate(['/home/artist-page/' + this.artistId]);
  }
}

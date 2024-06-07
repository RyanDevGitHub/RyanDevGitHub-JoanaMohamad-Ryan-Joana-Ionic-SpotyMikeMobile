import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 

@Component({
  selector: 'app-top-song', // 
  templateUrl: './top-song.component.html',
  styleUrls: ['./top-song.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class TopSongComponent implements OnInit { 

  constructor() { }

  ngOnInit() {}

}

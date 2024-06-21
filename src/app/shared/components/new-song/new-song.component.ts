import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 

@Component({
  selector: 'app-new-song', // 
  templateUrl: './new-song.component.html',
  styleUrls: ['./new-song.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class TopSongComponent implements OnInit { 

  constructor() { }

  ngOnInit() {
    console.log('init new-song');
  }

}

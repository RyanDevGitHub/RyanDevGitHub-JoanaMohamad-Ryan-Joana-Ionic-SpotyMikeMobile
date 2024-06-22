import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
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
  router = inject(Router);
  ngOnInit() {
    console.log('init new-song');
  }

  redirectToNewPage(){
    this.router.navigate(['/home/new-song'])
  }

}

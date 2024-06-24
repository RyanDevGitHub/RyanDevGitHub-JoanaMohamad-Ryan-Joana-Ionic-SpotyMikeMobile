import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonCol, IonGrid, IonIcon, IonImg, IonRow } from "@ionic/angular/standalone";

@Component({
  selector: 'app-new-song', // 
  templateUrl: './new-song.component.html',
  styleUrls: ['./new-song.component.scss'],
  standalone: true,
  imports: [IonGrid,IonRow,IonCol,IonIcon,IonImg],
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

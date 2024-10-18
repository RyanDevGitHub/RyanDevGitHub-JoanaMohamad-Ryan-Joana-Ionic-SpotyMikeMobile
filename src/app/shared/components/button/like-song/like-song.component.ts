import { addIcons } from 'ionicons';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { heart, heartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-like-song',
  templateUrl: './like-song.component.html',
  standalone: true,
  styleUrls: ['./like-song.component.scss'],
  imports: [IonButton, IonIcon],
})
export class LikeSongComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  isLiked: boolean = false;
  ngOnInit() {
    addIcons({ heartOutline });
  }
  toggleLike() {
    console.log('test');
    this.isLiked = !this.isLiked;
  }
}

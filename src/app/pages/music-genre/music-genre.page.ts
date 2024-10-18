import { Component, OnInit, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { HeaderCategoryComponent } from 'src/app/shared/components/headers/header-category/header-category.component';
import { ActivatedRoute } from '@angular/router';
import { DisplayItemComponent } from 'src/app/shared/components/display-item/display-item.component';

@Component({
  selector: 'app-music-genre',
  templateUrl: './music-genre.page.html',
  styleUrls: ['./music-genre.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderCategoryComponent,
    DisplayItemComponent,
  ],
})
export class MusicGenrePage implements OnInit {
  genre: string;
  // route = inject(ActivatedRoute)
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.genre = params['genre'];
    });
  }
}

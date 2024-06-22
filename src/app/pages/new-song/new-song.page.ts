import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderCategoryComponent } from 'src/app/shared/components/header-category/header-category.component';

@Component({
  selector: 'app-new-song',
  templateUrl: './new-song.page.html',
  styleUrls: ['./new-song.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,HeaderCategoryComponent]
})
export class NewSongPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

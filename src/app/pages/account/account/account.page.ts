import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonCol,IonRow]
})
export class AccountPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

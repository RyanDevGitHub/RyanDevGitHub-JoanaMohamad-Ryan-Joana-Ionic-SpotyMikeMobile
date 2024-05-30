import { Component, OnInit } from '@angular/core';
import { IonNav } from "@ionic/angular/standalone";

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  standalone: true,
  styleUrls: ['./back-button.component.scss'],
  imports: [IonNav, ],
})
export class BackButtonComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log('start');
  }
}

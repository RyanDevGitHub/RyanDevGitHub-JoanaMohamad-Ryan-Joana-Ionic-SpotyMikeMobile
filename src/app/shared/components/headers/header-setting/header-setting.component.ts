import { Component, Input, OnInit } from '@angular/core';
import {
  IonCol,
  IonGrid,
  IonHeader,
  IonRow,
  IonText,
  IonToolbar,
  IonTitle,
} from '@ionic/angular/standalone';
import { BackButtonComponent } from '../../button/back-button/back-button.component';

@Component({
  selector: 'app-header-setting',
  templateUrl: './header-setting.component.html',
  styleUrls: ['./header-setting.component.scss'],
  standalone: true,
  imports: [
    IonTitle,
    IonToolbar,
    IonHeader,
    IonGrid,
    IonRow,
    IonCol,
    BackButtonComponent,
    IonText,
  ],
})
export class HeaderSettingComponent implements OnInit {
  @Input() title: string;
  @Input() saveData: boolean;
  constructor() {}

  ngOnInit() {}
  save() {
    if (this.saveData) {
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.component.html',
  standalone:true,
  styleUrls: ['./share-modal.component.scss'],
  imports:[IonHeader,IonToolbar,IonContent,IonTitle,IonModal,IonButton]
})
export class ShareModalComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

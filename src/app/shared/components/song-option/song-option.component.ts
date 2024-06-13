import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { addIcons } from 'ionicons';
import { addCircleOutline, albumsOutline, ellipsisHorizontalOutline, personAddOutline, shareOutline } from 'ionicons/icons';
import { IonIcon, IonButton, IonContent, IonModal, IonHeader, IonToolbar, IonButtons, IonTitle, IonItem, IonInput, IonGrid, IonRow, IonCol, IonImg, IonText } from "@ionic/angular/standalone";

@Component({
  selector: 'app-song-option',
  templateUrl: './song-option.component.html',
  standalone: true,
  styleUrls: ['./song-option.component.scss'],
  imports: [IonText, IonImg, IonCol, IonRow, IonGrid, IonButtons, IonButton, IonIcon ,IonContent,IonModal,IonHeader,IonToolbar,IonTitle,IonItem,IonInput ],

})
export class SongOptionComponent  implements OnInit {

  constructor() { }
  @ViewChild(IonModal) modal: IonModal;
  @Input()id:string;
  ngOnInit() {

    addIcons({ ellipsisHorizontalOutline,addCircleOutline ,albumsOutline,shareOutline,personAddOutline});
  }
  onClick(){

  }

  
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

}

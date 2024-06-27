import { Component, OnInit, inject } from '@angular/core';
import { IonCol, IonGrid, IonIcon, IonImg, IonRow, IonText, ModalController } from '@ionic/angular/standalone';
import { ModalStateService } from 'src/app/core/services/modal-state.service';

@Component({
  selector: 'app-song-option',
  templateUrl: './song-option-modal.component.html',
  styleUrls: ['./song-option-modal.component.scss'],
  standalone:true,
  imports:[IonRow,IonCol,IonText,IonIcon,IonImg,IonGrid
  ]
})
export class SongOptionModalComponent  implements OnInit {

  private modal = inject(ModalController);
  private modalStateService = inject(ModalStateService);

  constructor() { }

  ngOnInit() {}

  onClickAddPlaylist(){
  }

  onClickRedirectToAlbum(){
  }

  onClickShare(){
  }

  onClickRedirectToArtist(){
  }
  
  cancel() {
    this.modal.dismiss();
    this.modalStateService.setModalOpen(false);
  }
}


import { Component, Input, OnInit, ViewChild, inject } from '@angular/core';
import { addIcons } from 'ionicons';
import { addCircleOutline, albumsOutline, ellipsisHorizontalOutline, personAddOutline, shareOutline } from 'ionicons/icons';
import { IonIcon, IonButton, IonContent, IonModal, IonHeader, IonToolbar, IonButtons, IonTitle, IonItem, IonInput, IonGrid, IonRow, IonCol, IonImg, IonText, ModalController } from "@ionic/angular/standalone";
import { ModalStateService } from 'src/app/core/services/modal-state.service';
import { Router } from '@angular/router';
import { SongOptionModalComponent } from '../../modal/song-option-modal/song-option-modal.component';

@Component({
  selector: 'app-song-option',
  templateUrl: './song-option.component.html',
  standalone: true,
  styleUrls: ['./song-option.component.scss'],
  imports: [IonText, IonImg, IonCol, IonRow, IonGrid, IonButtons, IonButton, IonIcon ,IonContent,IonModal,IonHeader,IonToolbar,IonTitle,IonItem,IonInput ],

})


export class SongOptionComponent  implements OnInit {

  constructor(private modalStateService: ModalStateService,private router: Router) { }
  @ViewChild(IonModal) modal: IonModal;
  @Input()id:string;
  private ctrlModal = inject(ModalController);
  


  ngOnInit() {
    addIcons({ ellipsisHorizontalOutline,addCircleOutline ,albumsOutline,shareOutline,personAddOutline});
    
  }

  async openModal(){
    const modal  = await this.ctrlModal.create(
      {component:SongOptionModalComponent,
        initialBreakpoint: 1,  // Set the initial breakpoint to 30%
        breakpoints: [0, 1],  // Allow dragging to full height or lower
        cssClass: 'custom-modal-class'
      });
      this.modalStateService.setModalOpen(true);
      modal.present();
  }

}

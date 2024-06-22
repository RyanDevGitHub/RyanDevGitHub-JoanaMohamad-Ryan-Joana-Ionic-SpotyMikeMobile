import { Component, OnInit, inject } from '@angular/core';
import { IonButton, IonButtons, IonContent, IonIcon, IonTitle, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {  ellipsisVerticalOutline } from 'ionicons/icons';
import { FilterModalComponent } from '../../modal/filter-modal/filter-modal.component';

@Component({
  selector: 'app-filter-option',
  templateUrl: './filter-option.component.html',
  styleUrls: ['./filter-option.component.scss'],
  standalone:true,
  imports:[IonIcon,IonButton,],
})
export class FilterOptionComponent  implements OnInit {

  constructor() { }

  ctrlModal = inject(ModalController);

  ngOnInit() {

    addIcons({ellipsisVerticalOutline});
  }

  async openFilter(){
   const modal  = await this.ctrlModal.create(
      {component:FilterModalComponent,
        initialBreakpoint: 1,  // Set the initial breakpoint to 30%
        breakpoints: [0, 1],  // Allow dragging to full height or lower
        cssClass: 'custom-modal-class'
      });
      modal.present();
  }
}

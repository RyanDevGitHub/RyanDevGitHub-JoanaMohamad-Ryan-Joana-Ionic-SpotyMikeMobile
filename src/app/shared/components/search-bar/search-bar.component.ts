import { Component, OnInit, inject } from '@angular/core';
import { AnimationController, IonButton, IonCol, IonGrid, IonIcon, IonRow, ModalController, createAnimation } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { flashOutline, searchOutline } from 'ionicons/icons';
import { QuickMenuComponent } from '../../modal/quick-menu/quick-menu.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  standalone:true,
  styleUrls: ['./search-bar.component.scss'],
  imports:[IonGrid,IonRow,IonCol,IonButton,IonIcon]
  
})
export class SearchBarComponent  implements OnInit {

  constructor(private animationCtrl: AnimationController) { }

  private modalCtl = inject(ModalController);
  ngOnInit() {
    addIcons({flashOutline,searchOutline});
  }

  async openQuickMenu(){
  
    const modal = await this.modalCtl.create({
      component: QuickMenuComponent,
      enterAnimation: this.MyEnterAnimation,
      leaveAnimation: this.MyLeaveAnimation,
    });
    modal.present();
  }

  MyEnterAnimation = (baseEl: HTMLElement) => {
    const root : any = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
      .fromTo('opacity', 0, 1);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  MyLeaveAnimation = (baseEl: HTMLElement) => {
    return this.MyEnterAnimation(baseEl).direction('reverse');
  };
}

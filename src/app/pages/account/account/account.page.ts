import { ProfilInfoComponent } from '../../../shared/components/profilComponent/profil-info/profil-info.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCol,
  IonRow,
  IonAvatar,
  IonText,
  IonButton,
} from '@ionic/angular/standalone';
import { SectionWithDropdownComponent } from 'src/app/shared/components/section-with-dropdown/section-with-dropdown.component';
import { Router } from '@angular/router';
import { IPlaylist } from 'src/app/core/interfaces/playlistes';
import { ModalStateService } from 'src/app/core/services/modal-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonText,
    IonAvatar,
    IonGrid,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCol,
    IonRow,
    SectionWithDropdownComponent,
    ProfilInfoComponent,
  ],
})
export class AccountPage implements OnInit {
  public isModalOpen: boolean;
  private modalSubscription: Subscription;
  constructor(
    private router: Router,
    private modalStateService: ModalStateService
  ) {
    this.modalSubscription = modalStateService.modalOpen$.subscribe(
      (value) => (this.isModalOpen = value)
    );
  }
  items: IPlaylist[] = [
    {
      cover:
        'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/cover%2Fzelda-breath-of-the-wild-1655249167687.jpg?alt=media&token=5411b64e-3d8f-40b7-a6e8-4a16b10ba3f9',
      title: 'test1',
      artist: 'SunDark',
      nbSong: '12',
      id: '99',
    },
  ];

  ngOnInit() {}

  editProfile() {
    this.router.navigate(['home/edit-profile']);
  }

  ngOnDestroy() {
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
  }
}

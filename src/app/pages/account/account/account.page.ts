import { ProfilInfoComponent } from './../../../shared/components/profil-info/profil-info.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol, IonRow, IonAvatar, IonText, IonButton } from '@ionic/angular/standalone';
import { SectionWithDropdownComponent } from 'src/app/shared/components/section-with-dropdown/section-with-dropdown.component';
import { Router } from '@angular/router';
import { IPlaylists } from 'src/app/core/interfaces/playlistes';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [IonButton, IonText, IonAvatar, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonCol,IonRow,SectionWithDropdownComponent,ProfilInfoComponent]
})
export class AccountPage implements OnInit {

  constructor(private router:Router) { }
  items :IPlaylists  = [{cover:'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/cover%2Fzelda-breath-of-the-wild-1655249167687.jpg?alt=media&token=5411b64e-3d8f-40b7-a6e8-4a16b10ba3f9',title:'test1',artist:'SunDark',nbSong:'12',id:'99'}];



  ngOnInit() {
  }

  editProfile(){
    this.router.navigate(['account/edit-profile']);
  }
}

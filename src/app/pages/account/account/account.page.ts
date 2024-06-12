import { ProfilInfoComponent } from './../../../shared/components/profil-info/profil-info.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol, IonRow, IonAvatar, IonText, IonButton } from '@ionic/angular/standalone';
import { SectionWithDropdownComponent } from 'src/app/shared/components/section-with-dropdown/section-with-dropdown.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [IonButton, IonText, IonAvatar, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonCol,IonRow,SectionWithDropdownComponent,ProfilInfoComponent]
})
export class AccountPage implements OnInit {

  constructor(private router:Router) { }
  cover:string = 'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/cover%2Fzelda-breath-of-the-wild-1655249167687.jpg?alt=media&token=5411b64e-3d8f-40b7-a6e8-4a16b10ba3f9'
  items  = [{title:'test1',nbSong:'12',playlistName:'SunDark',cover:this.cover,playlistId:'12'},{title:'test2',nbSong:'6',playlistName:'MoonLight',cover:this.cover,playlistId:'6'}];
  ngOnInit() {
  }

  editProfile(){
    this.router.navigate(['account/edit-profile']);
  }
}

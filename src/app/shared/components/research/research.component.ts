import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonCol, IonGrid, IonIcon, IonInput, IonRow, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { searchOutline } from 'ionicons/icons';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss'],
  standalone:true,
  imports:[IonGrid,IonCol,IonRow,IonIcon,IonInput,IonText],
})
export class ResearchComponent  implements OnInit {

  constructor() { }
  private router = inject(Router)

  ngOnInit() {
    addIcons({searchOutline})
  }
  returnHome(){
    this.router.navigate(['/home/home']);
  }

}

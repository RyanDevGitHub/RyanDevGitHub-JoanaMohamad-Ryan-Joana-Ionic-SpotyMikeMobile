import { Component, Input, OnInit } from '@angular/core';
import { IonCol, IonGrid, IonHeader, IonRow, IonText } from '@ionic/angular/standalone';
import { BackButtonComponent } from '../back-button/back-button.component';
import { FilterOptionComponent } from '../filter-option/filter-option.component';

@Component({
  selector: 'app-header-category',
  templateUrl: './header-category.component.html',
  styleUrls: ['./header-category.component.scss'],
  standalone:true,
  imports:[IonHeader,IonGrid,IonCol,IonRow,BackButtonComponent,IonText,FilterOptionComponent],
})
export class HeaderCategoryComponent  implements OnInit {

  @Input() title: string;
  @Input() backButton: boolean;
  constructor() { }

  ngOnInit() {}
  
  openOption(){

  }
}

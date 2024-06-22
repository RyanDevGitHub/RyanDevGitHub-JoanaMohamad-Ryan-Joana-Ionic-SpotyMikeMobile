import { IonIcon, IonText } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonModal, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IFilter } from 'src/app/core/interfaces/filter';
import { addIcons } from 'ionicons';
import { checkmarkDoneOutline } from 'ionicons/icons';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  standalone:true,
  imports:[IonModal,IonGrid,IonCol,IonRow,IonAvatar,IonContent,IonTitle,IonButtons,IonToolbar,IonButton,IonHeader,IonItem,IonInput,IonText,IonIcon]
})
export class FilterModalComponent  implements OnInit {

  constructor() { }
  filters :IFilter[] = [{name:'Titre', activate:true},{name:'Artist', activate:false},{name:'Album', activate:false},]

  ngOnInit() {

    addIcons({checkmarkDoneOutline})
  }

  changeFilter(filterIndex :number){
    //set all filters to false 
    this.filters.forEach(filter => {
      filter.activate = false;
    });
    //set filter activate 
    this.filters[filterIndex].activate = true;

    //filter song

    
  }

}

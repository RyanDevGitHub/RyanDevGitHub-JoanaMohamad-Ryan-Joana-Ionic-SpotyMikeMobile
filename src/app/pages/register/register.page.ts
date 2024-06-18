import { Router } from '@angular/router';
import { Component, OnInit, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonList, IonInput, IonItem, IonText, IonButton, IonToggle, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { LocalStorageService } from 'src/app/core/services/local-strorage.service';
import { IUserDataBase } from 'src/app/core/interfaces/user';
import { BackButtonComponent } from 'src/app/shared/components/back-button/back-button.component';
import { toggle } from 'ionicons/icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonButton, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonList,IonInput,IonItem,IonText,IonButton,ReactiveFormsModule,BackButtonComponent,IonToggle,IonSelect,IonSelectOption]
})
export class RegisterPage implements OnInit {

  constructor() { }
  router  = inject(Router);
  localStore = inject(LocalStorageService);
  step:number;
  form: FormGroup;
  user : IUserDataBase = {id:'',
    firstName:'',
    lastName:'',
    email:'',
    sexe:'',
    favorites:[],
    playlists: [],
    lastsplayeds: [],
    created_at:'',};
  input = [
    {type:'email',formeControlName:'email',label:'Email',formControl:'email',btnName:'Suivant' ,btnBack:'ion-hide',toggle:'ion-hide',value:'',selectSexe:'ion-hide'},
  
    {type:'password',formeControlName:'password',label:'Mot de passe',formControl:'password',btnName:'Suivant',btnBack:'',toggle:'ion-hide',value:'',selectSexe:'ion-hide'},
  
    {type:'date',formeControlName:'dateOfBirth',label:'Date de naissance',formControl:'dateOfBirth',btnName:'Suivant',btnBack:'',toggle:'ion-hide',value:'',selectSexe:'ion-hide'},

    {type:'sexe',formeControlName:'sexe',label:'Indiquer votre sexe',formControl:'sexe',btnName:'Suivant',btnBack:'',toggle:'ion-hide',value:'',selectSexe:'',hideInput:'ion-hide'},
    
    {type:'artist',formeControlName:'artist',label:'Mot de passe',formControl:'password',btnName:'Suivant',btnBack:'',toggle:'' ,labelToggle:'Etes vous un artist',value:'',selectSexe:'ion-hide',hideInput:'ion-hide'},]
  ngOnInit() {    
    this.step = 0;
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      dateOfBirth: new FormControl('', [
        Validators.required,
        this.minimumAgeValidator(12),
      ]),
      sexe: new FormControl('', [
        Validators.required,

      ]),
      artistName: new FormControl('', [
        Validators.required,
      ]),
      label: new FormControl('', [
        Validators.required,
       
      ]),
      description: new FormControl('', [
        Validators.required,
     
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-ZÀ-ÿ\'\\s]{1,40}$')
      ]),
    });
  }
getFormControl(input:string){
  console.log(input);
    return this.form.get(input);
}
isBtnDisabled(input:string): boolean{
  if(this.getFormControl('email')?.value)this.getFormControl(input)?.setValue(this.getFormControl('email')?.value);
  console.log(this.getFormControl(input) );
  if(this.getFormControl(input)?.valid && this.getFormControl(input)?.value) return false;
 return true;
}

handleChange(e:any) {
  
  this.getFormControl(this.input[this.step].formeControlName)?.setValue(e.detail.value);
  console.log('ionChange fired with value: ' + e.detail.value);
}

  returnToLoginPage(){
    this.router.navigate(['/auth/login']);

  }
  nextStep(){
    //ajouter les info dans le user
    
    console.log(this.user);
    //afficher le nouvelle input et bouton 
    if(this.step != 5 )
    this.form.get('email')?.reset();
    this.step++ ;
    //verifier si c'est dernier input pour ajouter un bouton avec la method OnSubmit() et avec comme valeur Crée un compte

    //verifier si ce n'ets pas le premier input pour afficher la fleche de retour 

    //mettre la valeur du input a empty

  }

  minimumAgeValidator(minAge: number) {
    return (control: import("@angular/forms").AbstractControl): { [key: string]: any } | null => {
      if (control.value) {
        const today = new Date();
        const birthDate = new Date(control.value);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        // Si le mois de naissance est plus tard dans l'année que le mois actuel, nous devons diminuer l'âge de 1.
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }

        if (age < minAge) {
          return { 'minimumAge': { requiredAge: minAge, actualAge: age } };
        }
      }
      return null;
    };
  }
}

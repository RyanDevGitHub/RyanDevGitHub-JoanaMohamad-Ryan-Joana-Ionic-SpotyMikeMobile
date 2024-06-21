import { IonImg } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonList, IonInput, IonItem, IonText, IonButton, IonToggle, IonSelect, IonSelectOption, IonAvatar } from '@ionic/angular/standalone';
import { LocalStorageService } from 'src/app/core/services/local-strorage.service';
import { IUserDataBase } from 'src/app/core/interfaces/user';
import { BackButtonComponent } from 'src/app/shared/components/back-button/back-button.component';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonButton, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonList,IonInput,IonItem,IonText,IonButton,ReactiveFormsModule,BackButtonComponent,IonToggle,IonSelect,IonSelectOption,IonAvatar,IonImg]
})
export class RegisterPage implements OnInit {

  constructor() { }
  router  = inject(Router);
  localStore = inject(LocalStorageService);
  step:number;
  form: FormGroup;
  public checkedToggle : boolean = false;
  avatar: any = {
    src: 'https://ionicframework.com/docs/img/demos/avatar.svg'
  };
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
    {type:'email',formeControlName:'email',label:'Email',formControl:'email',btnName:'Suivant' ,btnBack:'ion-hide',toggle:'ion-hide',selectSexe:'ion-hide',avatar:'ion-hide'},
  
    {type:'password',formeControlName:'password',label:'Mot de passe',formControl:'password',btnName:'Suivant',btnBack:'',toggle:'ion-hide',selectSexe:'ion-hide',avatar:'ion-hide'},
  
    {type:'date',formeControlName:'dateOfBirth',label:'Date de naissance',formControl:'dateOfBirth',btnName:'Suivant',btnBack:'',toggle:'ion-hide',selectSexe:'ion-hide',avatar:'ion-hide'},

    {type:'sexe',formeControlName:'sexe',label:'Indiquer votre sexe',formControl:'sexe',btnName:'Suivant',btnBack:'',toggle:'ion-hide',selectSexe:'',hideInput:'ion-hide',avatar:'ion-hide'},

    {type:'artist',formeControlName:'artist',label:'',formControl:'',btnName:'Suivant',btnBack:'',toggle:'',selectSexe:'ion-hide',hideInput:'ion-hide',avatar:'ion-hide'},

    {type:'avatar',formeControlName:'avatar',label:'Importer votre avatar',formControl:'avatar',btnName:'Suivant',btnBack:'',toggle:'ion-hide' ,selectSexe:'ion-hide',hideInput:'ion-hide',avatar:''},

    {type:'name',formeControlName:'name',label:'Quel est votre nom',formControl:'name',btnName:'Crée un compte',btnBack:'',toggle:'ion-hide',selectSexe:'ion-hide',hideInput:'',avatar:'ion-hide'},   
  ]
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
      avatar: new FormControl('', [
       
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-ZÀ-ÿ\'\\s]{1,40}$')
      ]),
    });
  }
  onChangeToggle(){
    if(this.checkedToggle === true){
      this.checkedToggle = false;
    }else{
      this.checkedToggle = true;
    }
  }
  back(){
    if(this.step === this.input.length -1 && !this.checkedToggle ) {
      this.step -= 2 ; 
      return;
    } 
    this.step --;
    this.form.get('email')?.reset();
    this.form.get(this.input[this.step].formeControlName)?.reset();
  }

getFormControl(input:string){
 
    return this.form.get(input);
}
isBtnDisabled(input:string): boolean{
  console.log(this.input[this.step].formeControlName);
  if(this.input[this.step].formeControlName === 'artist' && !this.checkedToggle ){
    return false;
  } 
  if(this.input[this.step].formeControlName === 'artist' && this.checkedToggle){
    if(this.getFormControl('artistName')?.valid && this.getFormControl('label')?.valid && this.getFormControl('description')?.valid)
    return false;
  }
  if(this.getFormControl('email')?.value)this.getFormControl(input)?.setValue(this.getFormControl('email')?.value);
  if(this.getFormControl(input)?.valid && this.getFormControl(input)?.value) return false;
  if(input === 'avatar') return false;

  return true;
}

handleChange(e:any) {
  
  this.getFormControl(this.input[this.step].formeControlName)?.setValue(e.detail.value);
 
}

  returnToLoginPage(){
    this.router.navigate(['/auth/login']);

  }
  nextStep(){
    //ajouter les info dans le user
    
    console.log(this.input[this.step].formeControlName);
    //afficher le nouvelle input et bouton 
    if(this.step < this.input.length -1  && this.input[this.step].formeControlName != 'artist'){
      this.form.get('email')?.reset();
      this.step++ ;
    }else if(this.input[this.step].formeControlName === 'artist' && !this.checkedToggle){
      console.log('test');
      this.step = this.step + 2 ;
    }else if(this.input[this.step].formeControlName === 'artist' && this.checkedToggle){
      this.form.get('email')?.reset();
      this.step = this.step + 1 ;
    }else if(this.step === this.input.length -1){
      
    }
    
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

 async takePicture (){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
  
    // Can be set to the src of an image now
    this.avatar.src = imageUrl;
  };

  registerUser(data : IUserDataBase)
}

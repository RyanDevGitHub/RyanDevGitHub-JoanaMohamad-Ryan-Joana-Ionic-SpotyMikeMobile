import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { addDoc, deleteDoc, getDoc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import { doc, setDoc ,collection } from "firebase/firestore"; 
import { Query ,DocumentData } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592


@Injectable({
  providedIn: 'root',
})

export class spotytestFirebase {

  firebaseConfig = {
    apiKey: "AIzaSyD2wmPaAlLVy7iGY6L0gZt_i3MlC2vXb_A",
    authDomain: "spotytest-e89c6.firebaseapp.com",
    projectId: "spotytest-e89c6",
    storageBucket: "spotytest-e89c6.appspot.com",
    messagingSenderId: "823395277840",
    appId: "1:823395277840:web:4988a37c1d18697de2fe95",
    measurementId: "G-47B0D4P2EH"
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
  db = getFirestore(this.app);

  constructor() {}

  // Create a new document in collection 
  async createDocument (collectionName:string ,data:any){
    await addDoc(collection(this.db,collectionName),data);
  }

  // get a document in collection 
  async getDocument (collectionName:string ,documentId:any){
    await getDoc(doc(this.db, collectionName,documentId) );
  }

  // get many documents in collection 
  async getDocuments (query :Query<unknown, DocumentData>){
    await getDocs(query);
  }

  // get collection 
  async getCollection (collectionName: string){
    await getDocs(collection(this.db,collectionName));
  }

  // get sous collection 
  async getSousCollection (collectionName: string ,documentId: string,sousCollectionName: string){
    await getDocs(collection(this.db,collectionName,documentId,sousCollectionName));
  }


  // Update a document in collection 
  async updateDocument (collectionName:string ,documentId:string,data:any){
    await updateDoc(doc(this.db, collectionName,documentId),data);
  }

  // Delete a document in collection 
  async deleteDocument (collectionName:string ,documentId:any){
    await deleteDoc(doc(this.db, collectionName,documentId) );
  }
 
}


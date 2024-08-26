import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { IUserDataBase, IUserUpdateDataBase } from '../../interfaces/user';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserRepositoryService {
  app = initializeApp(environment.firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  db = getFirestore(this.app);

  constructor() {}

  async createUser(user: IUserDataBase) {
    // Construire l'objet utilisateur
    const userData = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      email: user.email,
      tel: user.tel || null,
      sexe: user.sexe,
      favorites: user.favorites || [],
      lastsplayeds: user.lastsplayeds || [],
      created_at: user.created_at,
    };

    // Ajouter l'utilisateur à la collection "Users"
    const userRef = await addDoc(
      collection(this.db, environment.collection.users),
      userData
    );

    // Ajouter les informations de l'artiste si disponibles
    if (user.artiste && user.artiste.id) {
      // Assurez-vous que `user.artiste.id` n'est pas vide
      const artistRef = doc(collection(userRef, 'artist'), user.artiste.id);
      await setDoc(artistRef, user.artiste); // Assurez-vous que `user.artiste` correspond à `IArtist`
    }

    // Ajouter les playlists dans une sous-collection "playlists"
    if (user.playlists && user.playlists.length > 0) {
      const playlistsRef = collection(userRef, 'playlists');
      for (const playlist of user.playlists) {
        await addDoc(playlistsRef, playlist);
      }
    }

    console.log('Success : User Created with Playlists and Artist Info');
  }

  // get a User in collection
  async getUser(UserId: string) {
    const docSnap = await getDoc(
      doc(this.db, environment.collection.users, UserId)
    );
    return docSnap.data();
  }

  // get a Users in collection by field
  getUsersByField(fieldName: string, value: string): Observable<any | null> {
    const querySnapshotPromise = getDocs(
      query(
        collection(this.db, environment.collection.users),
        where(fieldName, '==', value)
      )
    );
    return from(querySnapshotPromise).pipe(
      map((querySnapshot) => {
        if (!querySnapshot.empty) {
          return querySnapshot.docs[0].data();
        } else {
          console.log(
            `No User found with ${fieldName}=${value} in ${environment.collection.users} collection.`
          );
          return null;
        }
      })
    );
  }

  // get Users collection
  async getUsersCollection() {
    const querySnapshot = await getDocs(
      collection(this.db, environment.collection.users)
    );
    return querySnapshot.docs.map((doc) => doc.data());
  }

  // get sous collection
  async getSousCollection(
    collectionName: string,
    documentId: string,
    sousCollectionName: string
  ) {
    const querySnapshot = await getDocs(
      collection(this.db, collectionName, documentId, sousCollectionName)
    );
    return querySnapshot.docs.map((doc) => doc.data());
  }

  // Update a Users in collection
  async updateUser(
    userId: string,
    updates: { [key: string]: IUserUpdateDataBase }
  ) {
    await updateDoc(
      doc(this.db, environment.collection.users, userId),
      updates
    );
    return console.log('Success : User Update');
  }

  // Delete a User in collection
  async deleteDocument(userId: string) {
    await deleteDoc(doc(this.db, environment.collection.users, userId));
    return console.log('Success : User Delete');
  }

  // Delete a User in collection By Field
  async deleteUserByField(fieldName: string, value: string): Promise<void> {
    const querySnapshot = await getDocs(
      query(
        collection(this.db, environment.collection.users),
        where(fieldName, '==', value)
      )
    );

    if (!querySnapshot.empty) {
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });

      console.log(
        `Success: User(s) with ${fieldName}=${value} deleted from ${environment.collection.users} collection.`
      );
    } else {
      console.log(
        `No User found with ${fieldName}=${value} in ${environment.collection.users} collection.`
      );
    }
  }
}

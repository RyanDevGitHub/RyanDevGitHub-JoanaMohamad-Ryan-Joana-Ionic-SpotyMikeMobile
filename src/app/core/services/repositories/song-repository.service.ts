import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
} from 'firebase/firestore';

import { environment } from 'src/environments/environment';
import { IMusic } from '../../interfaces/music';
import { IAlbum } from '../../interfaces/album';

@Injectable({
  providedIn: 'root',
})
export class SongRepositoryService {
  app = initializeApp(environment.firebaseConfig);
  db = getFirestore(this.app);

  constructor() {}

  // Récupérer toutes les chansons
  async getAllSongs(): Promise<IMusic[]> {
    const querySnapshot = await getDocs(collection(this.db, 'Albums'));

    // Extraire et aplatir les chansons
    const songs: IMusic[] = querySnapshot.docs
      .map((doc) => doc.data())
      .filter((doc) => doc['songs'])
      .flatMap((doc) => {
        const songList = doc['songs'];
        return Array.isArray(songList)
          ? songList.map((song) => ({
              ...song,
              id: song['id'] || doc['id'], // Préserver l'ID de chaque chanson
            }))
          : [];
      });

    console.log('Flattened songs:', songs);
    return songs; // Retourner la liste aplatie des chansons
  }

  // Récupérer une chanson par ID
  async getSongById(songId: string): Promise<IMusic | null> {
    const docSnap = await getDoc(doc(this.db, 'music', songId));
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as IMusic;
    }
    return null;
  }

  // Ajouter une nouvelle chanson
  async addSong(song: IMusic): Promise<void> {
    await addDoc(collection(this.db, 'music'), song);
    console.log('Success: Song added');
  }
}

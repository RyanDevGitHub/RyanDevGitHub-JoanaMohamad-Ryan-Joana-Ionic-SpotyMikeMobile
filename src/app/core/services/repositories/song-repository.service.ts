import { loadSong } from '../../store/action/song.action';
import { inject, Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
} from 'firebase/firestore';

import { environment } from 'src/environments/environment';
import { IMusic, IMusicDate } from '../../interfaces/music';
import { IAlbum } from '../../interfaces/album';
import { v4 as uuidv4 } from 'uuid'; // Assure-toi d'installer cette dépendance via `npm install uuid`
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';

@Injectable({
  providedIn: 'root',
})
export class SongRepositoryService {
  app = initializeApp(environment.firebaseConfig);
  db = getFirestore(this.app);
  store = inject(Store<AppState>);

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
          ? songList.map((song, index) => ({
              ...song,
              id: song['id'] || `${doc['id']}_${index}`, // Génére un ID unique basé sur l'ID de l'album et l'index
            }))
          : [];
      });

    console.log('Flattened songs:', songs);
    return songs; // Retourner la liste aplatie des chansons
  }

  // Récupérer une chanson par ID
  // Récupérer une chanson par ID
  async getSongById(songId: string): Promise<IMusic | null> {
    const albumsCollection = collection(this.db, 'Albums'); // Collection Albums
    const querySnapshot = await getDocs(albumsCollection);

    for (const docSnap of querySnapshot.docs) {
      const albumData = docSnap.data();
      if (albumData['songs'] && Array.isArray(albumData['songs'])) {
        // Chercher dans les chansons de l'album
        const song = albumData['songs'].find(
          (song: IMusic) => song.id === songId
        );
        if (song) {
          return { ...song, albumId: docSnap.id }; // Inclure l'ID de l'album si besoin
        }
      }
    }

    return null; // Si aucune chanson n'est trouvée
  }

  // Ajouter une nouvelle chanson
  async addSong(song: IMusicDate, albumId?: string): Promise<void> {
    // Génère un identifiant unique si la chanson n'en a pas
    const songWithId = {
      ...song,
      id: song.id || uuidv4(), // Ajoute un ID unique à la chanson si elle n'en a pas
    };

    if (albumId) {
      // Ajouter la chanson à un album existant
      const albumDocRef = doc(this.db, 'Albums', albumId);
      const albumSnap = await getDoc(albumDocRef);

      if (albumSnap.exists()) {
        const albumData = albumSnap.data();
        const updatedSongs = albumData['songs']
          ? [...albumData['songs'], songWithId]
          : [songWithId];

        await updateDoc(albumDocRef, { songs: updatedSongs });
        console.log('Success: Song added to existing album');
        this.store.dispatch(loadSong()); // Cette action va charger toutes les chansons
      } else {
        console.error('Error: Album not found');
      }
    } else {
      // Créer un nouvel album pour cette chanson
      const newAlbum = { songs: [songWithId] };
      await addDoc(collection(this.db, 'Albums'), newAlbum);
      console.log('Success: New album created with the song');
      this.store.dispatch(loadSong());
    }
  }
}

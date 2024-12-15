import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: AngularFireStorage) {}

  uploadFile(file: File, path: string): Observable<string> {
    const filePath = `${path}/${Date.now()}_${file.name}`; // Chemin unique
    const fileRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, file);

    return new Observable((observer) => {
      uploadTask
        .snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              observer.next(url); // URL du fichier
              observer.complete();
            });
          })
        )
        .subscribe();
    });
  }
}

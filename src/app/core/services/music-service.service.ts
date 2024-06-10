import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {

  constructor() { }
  private audio = new Audio();
  private isPlayingSubject = new Subject<boolean>();
  isPlaying$ = this.isPlayingSubject.asObservable();

  play(url: string) {
    this.audio.src = url;
    this.audio.load();
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  resume() {
    this.audio.play();
  }

  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  isPlaying(): boolean {
    return !this.audio.paused;
  }

  getCurrentTime(): Observable<number> {
    return new Observable<number>(observer => {
      this.audio.addEventListener('timeupdate', () => {
        observer.next(this.audio.currentTime);
      });
    });
  }

  async getDuration(): Promise<number> {
    return new Promise<number>((resolve) => {
      if (this.audio.duration > 0) {
        resolve(this.audio.duration);
      } else {
        this.audio.addEventListener('loadedmetadata', () => {
          resolve(this.audio.duration);
        });
      }
    });
  }
  seek(time: number) {
    this.audio.currentTime = time;
  }
}
 
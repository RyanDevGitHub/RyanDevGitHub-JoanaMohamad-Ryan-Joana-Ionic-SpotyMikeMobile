import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MinimizePlayerAudioService {

  constructor() { }

  private miniPlayerVisible = true;

  showMiniPlayer() {
    this.miniPlayerVisible = true;
  }

  hideMiniPlayer() {
    this.miniPlayerVisible = false;
  }

  isMiniPlayerVisible(): boolean {
    return this.miniPlayerVisible;
  }
}

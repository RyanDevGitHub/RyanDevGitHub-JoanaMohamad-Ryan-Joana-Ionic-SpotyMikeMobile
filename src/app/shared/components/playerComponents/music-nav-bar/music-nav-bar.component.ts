import { PlaybackMode } from '../../../../core/interfaces/music';
import { addIcons } from 'ionicons';
import {
  IonButton,
  IonRange,
  IonIcon,
  IonGrid,
  IonCol,
  IonRow,
  IonLabel,
} from '@ionic/angular/standalone';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  pauseOutline,
  playOutline,
  playSkipBack,
  playSkipBackOutline,
  playSkipForwardOutline,
  repeatOutline,
  shuffleOutline,
} from 'ionicons/icons';
import { IMusic, IMusicList } from 'src/app/core/interfaces/music';
import { MusicServiceService } from 'src/app/core/services/music-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-music-nav-bar',
  templateUrl: './music-nav-bar.component.html',
  standalone: true,
  styleUrls: ['./music-nav-bar.component.scss'],
  imports: [IonButton, IonRange, IonIcon, IonGrid, IonCol, IonRow, IonLabel],
})
export class MusicNavBarComponent implements OnInit, OnDestroy {
  @Input() isMini: boolean;
  private musicPrev: IMusic = {
    cover: 'cover',
    title: 'title',
    artist: 'artist',
    url: 'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/%F0%9F%98%ADMessi%20leaves%20Barcelona!%F0%9F%98%AD%20(Lionel%20Messi%20farewell%20song%20press%20conference).mp3?alt=media&token=022f74d2-671c-4ccd-8040-dada277e7fb4',
    duration: '3.12',
    id: '12774',
  };

  private musicAfter: IMusic = {
    cover: 'cover',
    title: 'title',
    artist: 'artist',
    url: 'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/%F0%9F%8F%86MAN%20CITY%20CHAMPIONS!%F0%9F%8F%86%20Four%20in%20a%20row!%20Who%20Won%20the%20League%20City!%20City!%202023-2024.mp3?alt=media&token=e2d564f6-7095-4ee0-882c-135e23d6ea19',
    duration: '3.12',
    id: '1274',
  };

  private music: IMusic = {
    cover: 'cover',
    title: 'title',
    artist: 'artist',
    url: 'https://firebasestorage.googleapis.com/v0/b/spotytest-e89c6.appspot.com/o/%F0%9F%8E%A4COUTINHO%20GETS%20SOLD!%F0%9F%8E%A4%20Messi%20%26%20Suarez%20sort%20a%20transfer!%20Man%20Utd%20Liverpool%20PSG.mp3?alt=media&token=87fdfd7b-ea78-4e73-a93d-49691e584a78',
    duration: '3.12',
    id: '124',
  };

  private musicsList: IMusicList[] = [
    { musics: [this.musicPrev, this.music, this.musicAfter] },
  ];

  isPlaying: boolean = true;
  currentTime: number = 0;
  duration: number = 0;
  buttonFillShuffle: string = '';
  buttonColorShuffle: string = '';
  buttonFillLoop: string = '';
  buttonColorLoop: string = '';
  buttonColorAfter: string = '';
  buttonColorPrev: string = '';
  buttonFillAfter: string = '';
  buttonFillPrev: string = '';
  private indexMusicList = 1;
  private isPlayingSubscription: Subscription;
  private currentTimeSubscription: Subscription;
  constructor(private audioService: MusicServiceService) {}

  currentPlaybackMode: PlaybackMode = PlaybackMode.Default;

  async ngOnInit() {
    addIcons({
      playOutline,
      playSkipBackOutline,
      playSkipForwardOutline,
      repeatOutline,
      shuffleOutline,
      pauseOutline,
    });
    if (!this.audioService.isPlaying()) {
      this.audioService.play(
        this.musicsList[0].musics[this.indexMusicList].url
      );
    }
    this.isPlayingSubscription = this.audioService.isPlaying$.subscribe(
      (isPlaying) => {
        this.isPlaying = isPlaying;
      }
    );

    this.currentTimeSubscription = this.audioService
      .getCurrentTime()
      .subscribe((currentTime) => {
        this.currentTime = currentTime;
      });

    this.duration = await this.audioService.getDuration();
    console.log(this.indexMusicList);
  }

  playMusic() {
    if (!this.audioService.isPlaying()) {
      this.audioService.play(this.music.url);
    } else {
      this.audioService.resume();
    }
  }

  pauseMusic() {
    if (this.audioService.isPlaying()) {
      this.audioService.pause();
    }
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.audioService.pause();
    } else {
      this.audioService.resume();
    }
    this.isPlaying = !this.isPlaying;
  }

  async playPrevMusic() {
    console.log(this.indexMusicList);
    if (this.indexMusicList - 1 >= 0) {
      this.buttonFillAfter = '';
      this.buttonColorAfter = '';
      this.indexMusicList -= 1;
      this.audioService.play(
        this.musicsList[0].musics[this.indexMusicList].url
      );
      this.duration = await this.audioService.getDuration();
    } else {
      this.buttonColorPrev = 'medium';
      this.buttonFillPrev = 'solid';
    }
  }

  async playAfterMusic() {
    console.log(this.indexMusicList);
    console.log(this.currentPlaybackMode);

    if (this.currentPlaybackMode == PlaybackMode.Default) {
      if (this.musicsList[0].musics.length > this.indexMusicList + 1) {
        this.buttonColorPrev = '';
        this.buttonFillPrev = '';
        this.indexMusicList++;
        this.audioService.play(
          this.musicsList[0].musics[this.indexMusicList].url
        );
        this.duration = await this.audioService.getDuration();
      } else {
        this.buttonFillAfter = 'solid';
        this.buttonColorAfter = 'medium';
      }
    } else if (this.currentPlaybackMode == PlaybackMode.Loop) {
      this.audioService.play(
        this.musicsList[0].musics[this.indexMusicList].url
      );
    } else if (this.currentPlaybackMode == PlaybackMode.Shuffle) {
      this.audioService.play(
        this.musicsList[0].musics[Math.floor(Math.random() * 3) + 0].url
      );
      this.duration = await this.audioService.getDuration();
    }
  }

  formatTime(time: number): string {
    if (!isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${this.pad(minutes)}:${this.pad(seconds)}`;
    } else {
      return '00:00';
    }
  }

  pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  seekMusic(event: any) {
    const newValue = event.detail.value;
    this.audioService.seek(newValue);
  }

  randomPlaylist() {
    if (this.currentPlaybackMode != PlaybackMode.Shuffle) {
      this.currentPlaybackMode = PlaybackMode.Shuffle;
      this.buttonColorShuffle = 'success';
      this.buttonFillShuffle = 'solid';
    } else {
      this.currentPlaybackMode = PlaybackMode.Default;
      this.buttonColorShuffle = '';
      this.buttonFillShuffle = '';
    }
  }

  loopPlaylist() {
    if (this.currentPlaybackMode != PlaybackMode.Loop) {
      this.currentPlaybackMode = PlaybackMode.Loop;
      this.buttonColorLoop = 'success';
      this.buttonFillLoop = 'solid';
    } else {
      this.currentPlaybackMode = PlaybackMode.Default;
      this.buttonColorLoop = '';
      this.buttonFillLoop = '';
    }
  }

  ngOnDestroy(): void {
    this.isPlayingSubscription.unsubscribe();
    this.currentTimeSubscription.unsubscribe();
  }
}

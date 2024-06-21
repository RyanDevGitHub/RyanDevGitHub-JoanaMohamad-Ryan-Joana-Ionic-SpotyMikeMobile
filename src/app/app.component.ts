import { MusicServiceService } from './core/services/music-service.service';
import { Component, inject, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  private translate = inject(TranslateService);
  constructor(private audioService: MusicServiceService) {}
  ngOnInit(): void {
    this.translate.use('fr_FR');
    this.translate.setDefaultLang('fr_FR');
  }
}

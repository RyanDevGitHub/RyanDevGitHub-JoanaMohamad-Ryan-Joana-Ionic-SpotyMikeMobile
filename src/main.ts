import { MinimizePlayerAudioService } from './app/core/services/minimize-player-audio.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthentificationService } from 'src/app/core/services/authentification.service';
import { AuthService } from './app/core/services/auth.service';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { i18nProviders } from './app/core/providers/i18n.providers';
import { IonicModule } from '@ionic/angular';
import { LocalStorageService } from './app/core/services/local-strorage.service';
import { Firebase } from './app/core/services/firebase.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { provideStore } from '@ngrx/store';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    i18nProviders,
    provideHttpClient(),
    LocalStorageService,
    Firebase,
    AuthService,
    AuthentificationService,
    MinimizePlayerAudioService,
    AngularFireAuth,
    provideStore(),
    provideIonicAngular(),
    importProvidersFrom(IonicModule.forRoot()),
    provideRouter(routes),
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig},
  ],
});


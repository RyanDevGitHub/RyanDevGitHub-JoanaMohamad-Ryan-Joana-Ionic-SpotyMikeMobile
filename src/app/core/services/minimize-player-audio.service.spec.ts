import { TestBed } from '@angular/core/testing';

import { MinimizePlayerAudioService } from './minimize-player-audio.service';

describe('MinimizePlayerAudioService', () => {
  let service: MinimizePlayerAudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinimizePlayerAudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

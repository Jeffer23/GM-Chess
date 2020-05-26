import { TestBed } from '@angular/core/testing';

import { GmWebSocketService } from './gm-web-socket.service';

describe('GmWebSocketService', () => {
  let service: GmWebSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GmWebSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

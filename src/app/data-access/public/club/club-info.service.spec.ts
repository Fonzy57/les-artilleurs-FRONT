import { TestBed } from '@angular/core/testing';

import { ClubInfoService } from './club-info.service';

describe('ClubInfoService', () => {
  let service: ClubInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClubInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

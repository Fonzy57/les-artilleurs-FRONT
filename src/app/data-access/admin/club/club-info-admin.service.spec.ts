import { TestBed } from '@angular/core/testing';

import { ClubInfoAdminService } from './club-info-admin.service';

describe('ClubInfoAdminService', () => {
  let service: ClubInfoAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClubInfoAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FaqAdminService } from './faq-admin.service';

describe('FaqAdminService', () => {
  let service: FaqAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

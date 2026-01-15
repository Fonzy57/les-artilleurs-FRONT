import { TestBed } from "@angular/core/testing";

import { InfoBlockAdminService } from "./info-block-admin.service";

describe("InfoBlockAdminService", () => {
  let service: InfoBlockAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoBlockAdminService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from "@angular/core/testing";

import { InfoBlockService } from "./info-block.service";

describe("InfoBlockService", () => {
  let service: InfoBlockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoBlockService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ClubInfosManagement } from "./club-infos";

describe("ClubInfosManagement", () => {
  let component: ClubInfosManagement;
  let fixture: ComponentFixture<ClubInfosManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubInfosManagement],
    }).compileComponents();

    fixture = TestBed.createComponent(ClubInfosManagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

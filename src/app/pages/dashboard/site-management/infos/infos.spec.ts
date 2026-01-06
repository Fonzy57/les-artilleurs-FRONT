import { ComponentFixture, TestBed } from "@angular/core/testing";

import { InfosManagement } from "./infos";

describe("InfosManagement", () => {
  let component: InfosManagement;
  let fixture: ComponentFixture<InfosManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfosManagement],
    }).compileComponents();

    fixture = TestBed.createComponent(InfosManagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

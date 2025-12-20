import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardCopyright } from "./copyright";

describe("DashboardCopyright", () => {
  let component: DashboardCopyright;
  let fixture: ComponentFixture<DashboardCopyright>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCopyright],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardCopyright);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

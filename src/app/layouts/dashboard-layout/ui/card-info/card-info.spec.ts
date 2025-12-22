import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardCardInfo } from "./card-info";

describe("DashboardCardInfo", () => {
  let component: DashboardCardInfo;
  let fixture: ComponentFixture<DashboardCardInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCardInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardCardInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

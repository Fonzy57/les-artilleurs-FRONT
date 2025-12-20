import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardNavItem } from "./nav-item";

describe("DashboardNavItem", () => {
  let component: DashboardNavItem;
  let fixture: ComponentFixture<DashboardNavItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardNavItem],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardNavItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

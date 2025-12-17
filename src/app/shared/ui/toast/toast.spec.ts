import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AppToastComponent } from "./toast";

describe("Toast", () => {
  let component: AppToastComponent;
  let fixture: ComponentFixture<AppToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppToastComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppToastComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

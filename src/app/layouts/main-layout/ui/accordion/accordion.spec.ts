import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HorizontalAccordionComponent } from "./accordion";

describe("HorizontalAccordionComponent", () => {
  let component: HorizontalAccordionComponent;
  let fixture: ComponentFixture<HorizontalAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalAccordionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HorizontalAccordionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashButton } from './dash-button';

describe('DashButton', () => {
  let component: DashButton;
  let fixture: ComponentFixture<DashButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

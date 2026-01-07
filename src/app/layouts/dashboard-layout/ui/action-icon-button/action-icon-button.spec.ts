import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionIconButton } from './action-icon-button';

describe('ActionIconButton', () => {
  let component: ActionIconButton;
  let fixture: ComponentFixture<ActionIconButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionIconButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionIconButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

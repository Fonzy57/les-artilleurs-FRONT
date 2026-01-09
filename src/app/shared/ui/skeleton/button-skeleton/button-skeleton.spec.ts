import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSkeleton } from './button-skeleton';

describe('ButtonSkeleton', () => {
  let component: ButtonSkeleton;
  let fixture: ComponentFixture<ButtonSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

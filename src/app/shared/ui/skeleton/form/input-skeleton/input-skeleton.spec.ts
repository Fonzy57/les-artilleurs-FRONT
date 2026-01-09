import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSkeleton } from './input-skeleton';

describe('InputSkeleton', () => {
  let component: InputSkeleton;
  let fixture: ComponentFixture<InputSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

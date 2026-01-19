import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubFormSkeleton } from './club-form-skeleton';

describe('ClubFormSkeleton', () => {
  let component: ClubFormSkeleton;
  let fixture: ComponentFixture<ClubFormSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubFormSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubFormSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

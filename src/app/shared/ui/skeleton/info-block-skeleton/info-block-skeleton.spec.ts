import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBlockSkeleton } from './info-block-skeleton';

describe('InfoBlockSkeleton', () => {
  let component: InfoBlockSkeleton;
  let fixture: ComponentFixture<InfoBlockSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoBlockSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoBlockSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

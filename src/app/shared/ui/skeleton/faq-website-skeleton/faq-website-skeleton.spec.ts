import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqWebsiteSkeleton } from './faq-website-skeleton';

describe('FaqWebsiteSkeleton', () => {
  let component: FaqWebsiteSkeleton;
  let fixture: ComponentFixture<FaqWebsiteSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqWebsiteSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqWebsiteSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

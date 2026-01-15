import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPreview } from './info-preview';

describe('InfoPreview', () => {
  let component: InfoPreview;
  let fixture: ComponentFixture<InfoPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

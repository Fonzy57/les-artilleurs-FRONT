import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqEditDialog } from './faq-edit-dialog';

describe('FaqEditDialog', () => {
  let component: FaqEditDialog;
  let fixture: ComponentFixture<FaqEditDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqEditDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqEditDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBlockFormDialog } from './info-block-form-dialog';

describe('InfoBlockFormDialog', () => {
  let component: InfoBlockFormDialog;
  let fixture: ComponentFixture<InfoBlockFormDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoBlockFormDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoBlockFormDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

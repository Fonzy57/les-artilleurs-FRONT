import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Club } from './club';

describe('Club', () => {
  let component: Club;
  let fixture: ComponentFixture<Club>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Club]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Club);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

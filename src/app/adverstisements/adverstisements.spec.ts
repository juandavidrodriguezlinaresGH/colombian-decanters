import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adverstisements } from './adverstisements';

describe('Adverstisements', () => {
  let component: Adverstisements;
  let fixture: ComponentFixture<Adverstisements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adverstisements],
    }).compileComponents();

    fixture = TestBed.createComponent(Adverstisements);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

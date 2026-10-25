import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCarrousel } from './img-carrousel';

describe('ImgCarrousel', () => {
  let component: ImgCarrousel;
  let fixture: ComponentFixture<ImgCarrousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgCarrousel],
    }).compileComponents();

    fixture = TestBed.createComponent(ImgCarrousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

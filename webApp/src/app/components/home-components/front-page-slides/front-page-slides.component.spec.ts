import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageSlidesComponent } from './front-page-slides.component';

describe('FrontPageSlidesComponent', () => {
  let component: FrontPageSlidesComponent;
  let fixture: ComponentFixture<FrontPageSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontPageSlidesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontPageSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

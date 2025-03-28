import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageAboutComponent } from './front-page-about.component';

describe('FrontPageAboutComponent', () => {
  let component: FrontPageAboutComponent;
  let fixture: ComponentFixture<FrontPageAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontPageAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontPageAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundSwipeEffectComponent } from './background-swipe-effect.component';

describe('BackgroundSwipeEffectComponent', () => {
  let component: BackgroundSwipeEffectComponent;
  let fixture: ComponentFixture<BackgroundSwipeEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundSwipeEffectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundSwipeEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

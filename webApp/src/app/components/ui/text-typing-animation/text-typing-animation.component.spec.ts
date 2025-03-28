import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTypingAnimationComponent } from './text-typing-animation.component';

describe('TextTypingAnimationComponent', () => {
  let component: TextTypingAnimationComponent;
  let fixture: ComponentFixture<TextTypingAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextTypingAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextTypingAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

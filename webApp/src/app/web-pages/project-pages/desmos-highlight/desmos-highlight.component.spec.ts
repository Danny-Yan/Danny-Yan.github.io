import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesmosHighlightComponent } from './desmos-highlight.component';

describe('DesmosHighlightComponent', () => {
  let component: DesmosHighlightComponent;
  let fixture: ComponentFixture<DesmosHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesmosHighlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesmosHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

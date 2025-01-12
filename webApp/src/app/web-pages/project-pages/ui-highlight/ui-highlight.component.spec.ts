import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiHighlightComponent } from './ui-highlight.component';

describe('UiHighlightComponent', () => {
  let component: UiHighlightComponent;
  let fixture: ComponentFixture<UiHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiHighlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

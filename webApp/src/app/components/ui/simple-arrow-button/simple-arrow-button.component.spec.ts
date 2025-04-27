import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleArrowButtonComponent } from './simple-arrow-button.component';

describe('SimpleArrowButtonComponent', () => {
  let component: SimpleArrowButtonComponent;
  let fixture: ComponentFixture<SimpleArrowButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleArrowButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleArrowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

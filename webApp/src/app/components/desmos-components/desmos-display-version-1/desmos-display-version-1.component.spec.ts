import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesmosDisplayVersion1Component } from './desmos-display-version-1.component';

describe('DesmosDisplayVersion1Component', () => {
  let component: DesmosDisplayVersion1Component;
  let fixture: ComponentFixture<DesmosDisplayVersion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesmosDisplayVersion1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesmosDisplayVersion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

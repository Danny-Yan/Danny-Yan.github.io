import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesmosDisplayVersion2Component } from './desmos-display-version-2.component';

describe('DesmosDisplayVersion2Component', () => {
  let component: DesmosDisplayVersion2Component;
  let fixture: ComponentFixture<DesmosDisplayVersion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesmosDisplayVersion2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesmosDisplayVersion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesmosPageComponent } from './desmos-page.component';

describe('DesmosPageComponent', () => {
  let component: DesmosPageComponent;
  let fixture: ComponentFixture<DesmosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesmosPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesmosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

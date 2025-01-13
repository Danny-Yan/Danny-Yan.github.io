import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSweepComponent } from './section-sweep.component';

describe('SectionSweepComponent', () => {
  let component: SectionSweepComponent;
  let fixture: ComponentFixture<SectionSweepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSweepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSweepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

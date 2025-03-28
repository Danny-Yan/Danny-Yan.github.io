import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticleSimHighlightComponent } from './particle-sim-highlight.component';

describe('ParticleSimHighlightComponent', () => {
  let component: ParticleSimHighlightComponent;
  let fixture: ComponentFixture<ParticleSimHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticleSimHighlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticleSimHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

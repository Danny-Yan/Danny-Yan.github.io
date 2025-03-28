import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticleSimPageComponent } from './particle-sim-page.component';

describe('ParticleSimPageComponent', () => {
  let component: ParticleSimPageComponent;
  let fixture: ComponentFixture<ParticleSimPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticleSimPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticleSimPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

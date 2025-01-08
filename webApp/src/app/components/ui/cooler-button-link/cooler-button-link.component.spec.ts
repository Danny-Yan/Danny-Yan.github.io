import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolerButtonLinkComponent } from './cooler-button-link.component';

describe('CoolerButtonLinkComponent', () => {
  let component: CoolerButtonLinkComponent;
  let fixture: ComponentFixture<CoolerButtonLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoolerButtonLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoolerButtonLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

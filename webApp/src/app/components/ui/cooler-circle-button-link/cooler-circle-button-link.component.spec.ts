import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolerCircleButtonLinkComponent } from './cooler-circle-button-link.component';

describe('CoolerCircleButtonLinkComponent', () => {
  let component: CoolerCircleButtonLinkComponent;
  let fixture: ComponentFixture<CoolerCircleButtonLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoolerCircleButtonLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoolerCircleButtonLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

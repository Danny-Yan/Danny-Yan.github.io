import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleButtonLinkComponent } from './circle-button-link.component';

describe('CircleButtonLinkComponent', () => {
  let component: CircleButtonLinkComponent;
  let fixture: ComponentFixture<CircleButtonLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircleButtonLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleButtonLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

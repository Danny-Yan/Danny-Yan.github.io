import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowButtonLinkComponent } from './follow-button-link.component';

describe('FollowButtonLinkComponent', () => {
  let component: FollowButtonLinkComponent;
  let fixture: ComponentFixture<FollowButtonLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowButtonLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowButtonLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageContactLinksComponent } from './front-page-contact-links.component';

describe('FrontPageContactLinksComponent', () => {
  let component: FrontPageContactLinksComponent;
  let fixture: ComponentFixture<FrontPageContactLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontPageContactLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontPageContactLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

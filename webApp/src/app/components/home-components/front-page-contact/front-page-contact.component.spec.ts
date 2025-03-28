import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageContactComponent } from './front-page-contact.component';

describe('FrontPageContactComponent', () => {
  let component: FrontPageContactComponent;
  let fixture: ComponentFixture<FrontPageContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontPageContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontPageContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

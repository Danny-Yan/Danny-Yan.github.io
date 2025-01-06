import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgObjectComponent } from './svg-object.component';

describe('SvgObjectComponent', () => {
  let component: SvgObjectComponent;
  let fixture: ComponentFixture<SvgObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgObjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProjectRedirectComponent } from './mini-project-redirect.component';

describe('MiniProjectRedirectComponent', () => {
  let component: MiniProjectRedirectComponent;
  let fixture: ComponentFixture<MiniProjectRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniProjectRedirectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniProjectRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

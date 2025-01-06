import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordColumnTripleComponent } from './discord-column-triple.component';

describe('DiscordColumnTripleComponent', () => {
  let component: DiscordColumnTripleComponent;
  let fixture: ComponentFixture<DiscordColumnTripleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscordColumnTripleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscordColumnTripleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

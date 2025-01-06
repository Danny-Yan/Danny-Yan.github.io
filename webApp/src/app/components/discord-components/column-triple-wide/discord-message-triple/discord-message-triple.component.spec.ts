import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordMessageTripleComponent } from './discord-message-triple.component';

describe('DiscordMessageTripleComponent', () => {
  let component: DiscordMessageTripleComponent;
  let fixture: ComponentFixture<DiscordMessageTripleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscordMessageTripleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscordMessageTripleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

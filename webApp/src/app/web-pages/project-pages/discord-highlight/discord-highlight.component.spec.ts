import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordHighlightComponent } from './discord-highlight.component';

describe('DiscordHighlightComponent', () => {
  let component: DiscordHighlightComponent;
  let fixture: ComponentFixture<DiscordHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscordHighlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscordHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
